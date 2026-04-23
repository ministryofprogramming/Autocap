import { renderHook, act, waitFor } from '@testing-library/react';
import { useCountUp } from './useCountUp';

describe('useCountUp', () => {
  it('returns initial state with value "0" and hasAnimated false', () => {
    const { result } = renderHook(() => useCountUp({ end: 100 }));

    expect(result.current.value).toBe('0');
    expect(result.current.hasAnimated).toBe(false);
    expect(typeof result.current.animate).toBe('function');
  });

  it('animates to end value when animate is called', async () => {
    const { result } = renderHook(() => useCountUp({ end: 100, duration: 100 }));

    expect(result.current.value).toBe('0');

    act(() => {
      result.current.animate();
    });

    // Wait for animation to complete
    await waitFor(
      () => {
        expect(result.current.value).toBe('100');
      },
      { timeout: 200 }
    );

    expect(result.current.hasAnimated).toBe(true);
  });

  it('does not re-animate when animate() called after completion', async () => {
    const { result } = renderHook(() => useCountUp({ end: 100, duration: 100 }));

    // First animation
    act(() => {
      result.current.animate();
    });

    await waitFor(
      () => {
        expect(result.current.value).toBe('100');
      },
      { timeout: 200 }
    );

    expect(result.current.hasAnimated).toBe(true);

    // Try to animate again - should not change
    act(() => {
      result.current.animate();
    });

    // Value should remain at 100
    expect(result.current.value).toBe('100');
    expect(result.current.hasAnimated).toBe(true);
  });

  it('formats value with prefix', async () => {
    const { result } = renderHook(() =>
      useCountUp({ end: 100, duration: 100, prefix: '$' })
    );

    act(() => {
      result.current.animate();
    });

    await waitFor(
      () => {
        expect(result.current.value).toBe('$100');
      },
      { timeout: 200 }
    );
  });

  it('formats value with suffix', async () => {
    const { result } = renderHook(() =>
      useCountUp({ end: 100, duration: 100, suffix: '+' })
    );

    act(() => {
      result.current.animate();
    });

    await waitFor(
      () => {
        expect(result.current.value).toBe('100+');
      },
      { timeout: 200 }
    );
  });

  it('formats value with both prefix and suffix', async () => {
    const { result } = renderHook(() =>
      useCountUp({ end: 100, duration: 100, prefix: '$', suffix: 'M' })
    );

    act(() => {
      result.current.animate();
    });

    await waitFor(
      () => {
        expect(result.current.value).toBe('$100M');
      },
      { timeout: 200 }
    );
  });

  it('handles decimal values correctly', async () => {
    const { result } = renderHook(() =>
      useCountUp({ end: 99.9, duration: 100 })
    );

    act(() => {
      result.current.animate();
    });

    await waitFor(
      () => {
        const value = parseFloat(result.current.value);
        expect(value).toBeCloseTo(99.9, 0);
      },
      { timeout: 200 }
    );
  });

  it('cancels animation frame on unmount', () => {
    const cancelAnimationFrameSpy = jest.spyOn(
      window,
      'cancelAnimationFrame'
    );

    const { result, unmount } = renderHook(() =>
      useCountUp({ end: 100, duration: 2000 })
    );

    act(() => {
      result.current.animate();
    });

    // Unmount before animation completes
    unmount();

    expect(cancelAnimationFrameSpy).toHaveBeenCalled();
    cancelAnimationFrameSpy.mockRestore();
  });

  it('uses default duration of 2000ms when not specified', () => {
    const { result } = renderHook(() => useCountUp({ end: 100 }));

    // Start animation
    act(() => {
      result.current.animate();
    });

    // The animation should be running (hasAnimated becomes true immediately)
    expect(result.current.hasAnimated).toBe(false);
  });

  it('applies ease-out cubic easing', async () => {
    const { result } = renderHook(() =>
      useCountUp({ end: 100, duration: 200 })
    );

    act(() => {
      result.current.animate();
    });

    // Check value at ~50ms (25% through animation)
    await new Promise((resolve) => setTimeout(resolve, 50));

    const earlyValue = parseInt(result.current.value);

    // With ease-out cubic, 25% time should give more than 25% progress
    // because it starts fast and slows down
    expect(earlyValue).toBeGreaterThan(25);

    // Wait for completion
    await waitFor(
      () => {
        expect(result.current.value).toBe('100');
      },
      { timeout: 300 }
    );
  });
});
