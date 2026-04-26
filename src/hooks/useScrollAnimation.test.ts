/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from '@testing-library/react';
import { useScrollAnimation } from './useScrollAnimation';

describe('useScrollAnimation', () => {
  let mockObserve: jest.Mock;
  let mockDisconnect: jest.Mock;

  beforeEach(() => {
    mockObserve = jest.fn();
    mockDisconnect = jest.fn();

    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: jest.fn(),
      takeRecords: jest.fn(),
      root: null,
      rootMargin: '',
      thresholds: [],
    })) as any;

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns a ref and isInView state', () => {
    const { result } = renderHook(() => useScrollAnimation());

    expect(result.current).toHaveProperty('ref');
    expect(result.current).toHaveProperty('isInView');
    expect(typeof result.current.isInView).toBe('boolean');
  });

  it('initializes with isInView as false', () => {
    const { result } = renderHook(() => useScrollAnimation());

    expect(result.current.isInView).toBe(false);
  });

  it('provides consistent API shape', () => {
    const { result } = renderHook(() => useScrollAnimation());

    // Verify the hook returns the expected shape
    expect(result.current).toEqual(
      expect.objectContaining({
        ref: expect.any(Object),
        isInView: expect.any(Boolean),
      })
    );
  });

  it('accepts custom options for threshold, rootMargin, and triggerOnce', () => {
    const { result } = renderHook(() =>
      useScrollAnimation({
        threshold: 0.5,
        rootMargin: '100px',
        triggerOnce: false,
      })
    );

    expect(result.current.ref).toBeDefined();
    expect(result.current.isInView).toBe(false);
  });

  it('uses default options when none are provided', () => {
    const { result } = renderHook(() => useScrollAnimation());

    expect(result.current.ref).toBeDefined();
    expect(result.current.isInView).toBe(false);
  });
});
