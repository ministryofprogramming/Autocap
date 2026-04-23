import { aboutContent } from './about'

describe('About Content - Timeline Data Model', () => {
  describe('Timeline milestone structure', () => {
    it('should have all 5 milestones with required fields', () => {
      expect(aboutContent.timeline.milestones).toHaveLength(5)

      aboutContent.timeline.milestones.forEach((milestone) => {
        expect(milestone).toHaveProperty('year')
        expect(milestone).toHaveProperty('title')
        expect(milestone).toHaveProperty('description')
        expect(milestone).toHaveProperty('status')
      })
    })

    it('should have valid status values only', () => {
      const validStatuses: Array<'completed' | 'current' | 'future'> = [
        'completed',
        'current',
        'future',
      ]

      aboutContent.timeline.milestones.forEach((milestone) => {
        expect(validStatuses).toContain(milestone.status)
      })
    })

    it('should have exactly 3 completed, 1 current, and 1 future milestone', () => {
      const statuses = aboutContent.timeline.milestones.map((m) => m.status)
      const completedCount = statuses.filter((s) => s === 'completed').length
      const currentCount = statuses.filter((s) => s === 'current').length
      const futureCount = statuses.filter((s) => s === 'future').length

      expect(completedCount).toBe(3)
      expect(currentCount).toBe(1)
      expect(futureCount).toBe(1)
    })

    it('should have completed milestones first, then current, then future', () => {
      const milestones = aboutContent.timeline.milestones

      // First 3 should be completed
      expect(milestones[0].status).toBe('completed') // Founding
      expect(milestones[1].status).toBe('completed') // First Acquisition
      expect(milestones[2].status).toBe('completed') // Geographic Growth

      // 4th should be current
      expect(milestones[3].status).toBe('current') // Today

      // 5th should be future
      expect(milestones[4].status).toBe('future') // 2028 Target
    })
  })

  describe('Timeline milestone content validation', () => {
    it('should have "Founding" as first milestone', () => {
      expect(aboutContent.timeline.milestones[0].year).toBe('Founding')
    })

    it('should have "Today" as current milestone', () => {
      const currentMilestone = aboutContent.timeline.milestones.find((m) => m.status === 'current')
      expect(currentMilestone?.year).toBe('Today')
    })

    it('should have "2028 Target" as future milestone', () => {
      const futureMilestone = aboutContent.timeline.milestones.find((m) => m.status === 'future')
      expect(futureMilestone?.year).toBe('2028 Target')
    })
  })
})
