// Content block types for rich article content
export interface ParagraphBlock {
  type: 'paragraph'
  content: string
}

export interface HeadingBlock {
  type: 'heading'
  level: 2 | 3
  content: string
  id?: string // For anchor links
}

export interface ImageBlock {
  type: 'image'
  src: string
  alt: string
  caption?: string
  credit?: string
}

export interface QuoteBlock {
  type: 'quote'
  content: string
  attribution?: string
  role?: string
}

export interface ListBlock {
  type: 'list'
  style: 'bullet' | 'numbered'
  items: string[]
}

export interface CalloutBlock {
  type: 'callout'
  variant: 'info' | 'highlight'
  content: string
}

export type ArticleContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | QuoteBlock
  | ListBlock
  | CalloutBlock

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  publishDate: string // ISO format "2026-04-15"
  author: string
  category: 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'
  imageUrl?: string
  slug: string // for future individual pages
  readTimeMinutes: number
  order: number
  fullContent?: ArticleContentBlock[] // Rich article body
  tags?: string[] // e.g., ["acquisition", "expansion"]
  relatedArticleIds?: string[] // Manual curation
}

export interface NewsContent {
  articles: NewsArticle[]
  pageMetadata: {
    title: string
    description: string
  }
}

export const newsContent: NewsContent = {
  articles: [
    {
      id: 'news-001',
      title: 'AutoCap Group Acquires Svenska Däckgruppen',
      excerpt: 'We are excited to announce the acquisition of Svenska Däckgruppen, expanding our presence in the Västra Götaland region. This strategic move strengthens our position as Sweden\'s leading tire services platform.',
      publishDate: '2026-01-15',
      author: 'AutoCap Group',
      category: 'Press Release',
      slug: 'autocap-acquires-svenska-dackgruppen',
      readTimeMinutes: 3,
      order: 1,
      tags: ['acquisition', 'expansion', 'vastra-gotaland'],
      relatedArticleIds: ['news-003', 'news-005'],
      fullContent: [
        { type: 'paragraph', content: 'Stockholm, January 15, 2026 — AutoCap Group announces the acquisition of Svenska Däckgruppen, a leading tire services operator with 8 locations across the Västra Götaland region. This strategic acquisition marks our most significant expansion since establishing operations in southern Sweden.' },
        { type: 'paragraph', content: 'Founded in 1987, Svenska Däckgruppen has built a reputation for exceptional customer service and technical expertise across Gothenburg and surrounding communities. The company operates modern facilities in Göteborg, Mölndal, Kungsbacka, Partille, Lerum, Härryda, Kungälv, and Ale, serving over 15,000 customers annually.' },
        { type: 'heading', level: 2, content: 'Strategic Expansion', id: 'strategic-expansion' },
        { type: 'paragraph', content: 'This acquisition strengthens AutoCap\'s position as Sweden\'s leading tire services platform and demonstrates our commitment to expanding our partnership model across key regions. The Västra Götaland region represents one of Sweden\'s largest automotive markets, with significant growth potential in both consumer and commercial vehicle services.' },
        { type: 'quote', content: 'This acquisition represents a perfect alignment of values and vision. Svenska Däckgruppen shares our commitment to local expertise, exceptional service, and sustainable growth.', attribution: 'Erik Johansson', role: 'CEO, AutoCap Group' },
        { type: 'callout', variant: 'highlight', content: 'Svenska Däckgruppen operates 8 locations across Västra Götaland, employing 45 skilled technicians and serving over 15,000 customers annually.' },
        { type: 'heading', level: 2, content: 'Preserving Local Identity', id: 'preserving-identity' },
        { type: 'paragraph', content: 'True to our partnership model, Svenska Däckgruppen will maintain its brand identity and local management team. Customers will continue to receive the same personalized service they\'ve come to expect, while benefiting from enhanced capabilities through AutoCap\'s platform.' },
        { type: 'list', style: 'bullet', items: [
          'Maintained brand identity and customer relationships',
          'Continued local management and operational autonomy',
          'Enhanced purchasing power and inventory management',
          'Access to advanced diagnostic and service technologies',
          'Expanded training and development programs',
        ] },
        { type: 'heading', level: 2, content: 'Looking Forward', id: 'looking-forward' },
        { type: 'paragraph', content: 'The integration process will begin immediately, with full operational integration expected by Q2 2026. We remain committed to supporting Svenska Däckgruppen\'s team and ensuring a seamless transition for customers and employees alike.' },
        { type: 'callout', variant: 'info', content: 'For media inquiries, contact press@autocapgroup.se. For investor relations, contact investors@autocapgroup.se.' },
      ],
    },
    {
      id: 'news-002',
      title: 'The Consolidation Dilemma: Why Local Brands Matter',
      excerpt: 'Industry consolidation doesn\'t mean losing what makes local workshops special. We explore how AutoCap\'s approach preserves brand identity while providing growth resources.',
      publishDate: '2025-12-20',
      author: 'Erik Johansson',
      category: 'Industry Insights',
      slug: 'consolidation-dilemma-local-brands',
      readTimeMinutes: 5,
      order: 2,
      tags: ['consolidation', 'local-brands', 'strategy'],
      relatedArticleIds: ['news-004', 'news-005'],
      fullContent: [
        { type: 'paragraph', content: 'The automotive services industry is experiencing rapid consolidation across Europe. Private equity firms and large chains are acquiring independent workshops at an unprecedented rate. Yet this trend raises a critical question: does consolidation necessarily mean losing what makes local businesses special?' },
        { type: 'paragraph', content: 'At AutoCap, we believe the answer is no. Industry consolidation and local brand preservation aren\'t mutually exclusive—they can and should coexist.' },
        { type: 'heading', level: 2, content: 'The Traditional Consolidation Model', id: 'traditional-model' },
        { type: 'paragraph', content: 'Traditional consolidation often follows a predictable pattern: acquire workshops, rebrand them under a corporate name, centralize operations, and standardize every aspect of the customer experience. While this approach delivers operational efficiency, it comes at a cost.' },
        { type: 'callout', variant: 'info', content: 'Research shows that 67% of customers prefer doing business with locally-branded establishments they trust over national chains, even when prices are comparable.' },
        { type: 'paragraph', content: 'Customers lose the personal relationships they\'ve built over years. Workshop owners lose the identity they spent decades building. Communities lose the local character that made these businesses integral to the neighborhood.' },
        { type: 'heading', level: 2, content: 'A Different Approach', id: 'different-approach' },
        { type: 'paragraph', content: 'AutoCap\'s model starts from a different premise: the value of an independent workshop lies precisely in its independence. Our partners maintain their brand names, their customer relationships, and their operational autonomy.' },
        { type: 'quote', content: 'When we joined AutoCap, customers didn\'t even realize anything had changed. We\'re still the same team providing the same quality service. But now we have better tools and resources to serve them even better.', attribution: 'Lars Andersson', role: 'Owner, Däck & Fälg Specialized' },
        { type: 'heading', level: 3, content: 'What Changes', id: 'what-changes' },
        { type: 'list', style: 'bullet', items: [
          'Access to group purchasing power for better supplier terms',
          'Shared technology infrastructure and digital tools',
          'Professional development and training programs',
          'Financial resources for facility improvements',
          'Back-office support for administrative tasks',
        ] },
        { type: 'heading', level: 3, content: 'What Stays the Same', id: 'what-stays' },
        { type: 'list', style: 'bullet', items: [
          'Brand name and local market identity',
          'Management team and operational decisions',
          'Customer relationships and service approach',
          'Pricing strategies and market positioning',
          'Community involvement and local presence',
        ] },
        { type: 'heading', level: 2, content: 'The Proof Is in the Results', id: 'results' },
        { type: 'paragraph', content: 'Two years into our partnership model, the results validate our approach. Partner workshops have seen average revenue growth of 23% while maintaining customer satisfaction scores above 4.5/5. Employee retention rates exceed industry averages by 35%.' },
        { type: 'paragraph', content: 'Perhaps most tellingly, when we survey customers of partner workshops, less than 40% are aware that the business is part of a larger group. They simply see the trusted local workshop they\'ve always known—now with better service, updated facilities, and expanded capabilities.' },
        { type: 'callout', variant: 'highlight', content: 'Consolidation doesn\'t have to mean commodification. When done thoughtfully, it can preserve what makes local businesses special while providing the resources they need to compete and thrive.' },
        { type: 'paragraph', content: 'As industry consolidation continues, workshop owners have choices about who they partner with and what model they embrace. At AutoCap, we\'re proving that you can scale a business while preserving the local identity that made it successful in the first place.' },
      ],
    },
    {
      id: 'news-003',
      title: 'AutoCap Expands to Västra Götaland Region',
      excerpt: 'Following strong growth in Stockholm and southern Sweden, we\'re bringing our partnership model to the west coast. Meet the workshop owners joining the AutoCap family.',
      publishDate: '2025-12-10',
      author: 'Maria Svensson',
      category: 'Company News',
      slug: 'autocap-expands-vastra-gotaland',
      readTimeMinutes: 4,
      order: 3,
      tags: ['expansion', 'vastra-gotaland', 'growth'],
      relatedArticleIds: ['news-001', 'news-005'],
      fullContent: [
        { type: 'paragraph', content: 'Today marks a significant milestone in AutoCap\'s journey as we announce our expansion into the Västra Götaland region. After establishing successful partnerships across Stockholm and southern Sweden, we\'re bringing our collaborative model to Sweden\'s west coast.' },
        { type: 'paragraph', content: 'This expansion represents more than geographic growth—it\'s validation of our partnership approach and the trust workshop owners place in our model. Over the past six months, we\'ve been in discussions with several well-established workshops in the region, and we\'re thrilled to welcome our first partners.' },
        { type: 'heading', level: 2, content: 'Meet Our New Partners', id: 'new-partners' },
        { type: 'heading', level: 3, content: 'Göteborg Däck & Service', id: 'goteborg-partner' },
        { type: 'paragraph', content: 'Operating since 1995, Göteborg Däck & Service has built a loyal customer base through exceptional service and technical expertise. With locations in central Göteborg and Majorna, they serve over 5,000 customers annually across passenger and light commercial vehicles.' },
        { type: 'quote', content: 'We\'ve watched AutoCap\'s approach from the outside, and what impressed us most was how partners maintained their identity while gaining real operational benefits. That\'s exactly what we were looking for.', attribution: 'Stefan Bergström', role: 'Owner, Göteborg Däck & Service' },
        { type: 'heading', level: 3, content: 'Kungsbacka Hjulcenter', id: 'kungsbacka-partner' },
        { type: 'paragraph', content: 'A family business in its second generation, Kungsbacka Hjulcenter combines traditional craftsmanship with modern service excellence. Known for their expertise in premium brands and high-performance applications, they\'ve been a fixture in the Kungsbacka community for over 30 years.' },
        { type: 'callout', variant: 'highlight', content: 'Our initial Västra Götaland partners represent a combined 65 years of local market experience and serve over 10,000 customers annually.' },
        { type: 'heading', level: 2, content: 'Why Västra Götaland?', id: 'why-region' },
        { type: 'paragraph', content: 'The Västra Götaland region represents Sweden\'s second-largest automotive services market, with strong demand across both urban and suburban areas. The region\'s demographic profile and vehicle density make it an ideal market for our partnership model.' },
        { type: 'list', style: 'numbered', items: [
          'Population of over 1.7 million across diverse communities',
          'High vehicle ownership rates and premium brand penetration',
          'Strong local business culture and community engagement',
          'Growing demand for professional tire and wheel services',
        ] },
        { type: 'paragraph', content: 'More importantly, we\'ve identified numerous well-run independent workshops whose owners share our values around service quality, customer relationships, and sustainable growth. These are businesses we\'re excited to partner with and support.' },
        { type: 'heading', level: 2, content: 'What\'s Next', id: 'whats-next' },
        { type: 'paragraph', content: 'We\'re currently in discussions with additional workshop owners across Gothenburg, Mölndal, Partille, and surrounding communities. We expect to announce 3-5 additional partnerships in Q1 2026 as we continue building our regional presence thoughtfully and strategically.' },
        { type: 'callout', variant: 'info', content: 'Workshop owners interested in learning more about the AutoCap partnership model can contact our partnerships team at partners@autocapgroup.se or visit our partnerships page.' },
      ],
    },
    {
      id: 'news-004',
      title: 'Feature: Workshop Owners on Succession Planning',
      excerpt: 'Dagens Industri interviews three AutoCap partners about navigating succession planning while preserving family legacy. A deep dive into the human side of business transitions.',
      publishDate: '2025-11-28',
      author: 'Dagens Industri',
      category: 'Media Coverage',
      slug: 'workshop-owners-succession-planning',
      readTimeMinutes: 6,
      order: 4,
      tags: ['succession-planning', 'family-business', 'interviews'],
      relatedArticleIds: ['news-002', 'news-003'],
      fullContent: [
        { type: 'paragraph', content: 'For family business owners in the automotive services sector, succession planning presents a deeply personal challenge. After decades building a business, workshop owners face difficult questions about legacy, family involvement, and what comes next.' },
        { type: 'paragraph', content: 'Dagens Industri spoke with three AutoCap partners about their succession journeys—the challenges they faced, the decisions they made, and why partnering with AutoCap provided a path forward that honored their business legacy while securing their financial future.' },
        { type: 'heading', level: 2, content: 'The Succession Challenge', id: 'succession-challenge' },
        { type: 'paragraph', content: 'Swedish automotive workshops are aging. Industry data shows that over 40% of independent workshop owners are above 55, with many approaching retirement without clear succession plans. The challenge is multifaceted: finding capable successors, maintaining business value, ensuring employee security, and preserving customer relationships.' },
        { type: 'callout', variant: 'info', content: 'Over 60% of Swedish family businesses fail to successfully transition to the next generation, often resulting in business closure or distressed sales.' },
        { type: 'heading', level: 2, content: 'Three Stories, Three Paths', id: 'three-stories' },
        { type: 'heading', level: 3, content: 'Lars Andersson: No Family Succession', id: 'lars-story' },
        { type: 'paragraph', content: 'At 58, Lars Andersson had built Däck & Fälg Specialized in Malmö into one of southern Sweden\'s premier tire service providers. But neither of his children wanted to take over the business. "They both have successful careers in completely different fields," Lars explains. "I wanted them to follow their passions, not feel obligated to continue mine."' },
        { type: 'quote', content: 'I spent three years trying to find the right buyer. Every conversation felt wrong—either they wanted to gut what we\'d built, or they didn\'t understand the business. AutoCap was different. They wanted to preserve what made us successful.', attribution: 'Lars Andersson', role: 'Owner, Däck & Fälg Specialized' },
        { type: 'paragraph', content: 'Lars remains with the business in an advisory role, mentoring the next generation of management while enjoying more flexibility in his schedule. "It\'s the best of both worlds," he says. "I get to stay involved without the burden of ownership, and I know my team and customers are in good hands."' },
        { type: 'heading', level: 3, content: 'Karin Johansson: Family Transition Complexity', id: 'karin-story' },
        { type: 'paragraph', content: 'Karin Johansson faced a different challenge at her Uppsala workshop. Her son wanted to take over, but lacked the capital to buy her out. Traditional bank financing proved difficult given the business\'s valuation and her son\'s limited collateral.' },
        { type: 'paragraph', content: 'The AutoCap partnership provided an unexpected solution. "They acquired the majority of the business, giving me the exit I needed financially," Karin explains. "But my son continues managing day-to-day operations and has a path to increase his ownership stake over time through performance-based earn-outs."' },
        { type: 'quote', content: 'This structure meant I didn\'t have to choose between my financial security and my son\'s opportunity. Both could be achieved.', attribution: 'Karin Johansson', role: 'Former Owner, Uppsala Däckservice' },
        { type: 'heading', level: 3, content: 'Per-Erik Svensson: Timing the Market', id: 'per-story' },
        { type: 'paragraph', content: 'Per-Erik Svensson, 62, recognized that delaying succession planning had risks. "I watched several peers wait too long," he recalls. "Their health declined, or market conditions changed, and suddenly they were selling from a position of weakness. I didn\'t want that to be my story."' },
        { type: 'paragraph', content: 'After 35 years building his Örebro workshop, Per-Erik partnered with AutoCap while still at the height of his business success. "I could have kept running the business for another 5-10 years," he admits. "But this gave me the freedom to step back gradually, on my terms, while ensuring continuity for my team and customers."' },
        { type: 'heading', level: 2, content: 'Common Themes', id: 'common-themes' },
        { type: 'paragraph', content: 'While each story is unique, several themes emerge across these succession journeys that AutoCap partners consistently highlight:' },
        { type: 'list', style: 'bullet', items: [
          'The importance of starting succession planning years before intended exit',
          'The value of having multiple options rather than forcing a single path',
          'The peace of mind that comes from knowing employees and customers are protected',
          'The benefit of maintaining involvement and legacy rather than a complete break',
          'The relief of finding partners who respect what you\'ve built',
        ] },
        { type: 'callout', variant: 'highlight', content: 'Succession planning isn\'t just a financial transaction—it\'s about honoring decades of work, protecting people who depend on you, and ensuring your business legacy continues.' },
        { type: 'paragraph', content: 'For workshop owners facing succession decisions, these stories illustrate that thoughtful planning and the right partnership can preserve what you\'ve built while securing the future you want.' },
      ],
    },
    {
      id: 'news-005',
      title: 'How We\'re Building Sweden\'s Tire Services Platform',
      excerpt: 'From our first partnership to becoming a multi-regional platform, we share the journey, challenges, and lessons learned in creating a new kind of automotive services company.',
      publishDate: '2025-10-15',
      author: 'AutoCap Leadership Team',
      category: 'Company News',
      slug: 'building-swedens-tire-services-platform',
      readTimeMinutes: 7,
      order: 5,
      tags: ['platform', 'growth-story', 'vision'],
      relatedArticleIds: ['news-001', 'news-003'],
      fullContent: [
        { type: 'paragraph', content: 'When we started AutoCap Group, we had a simple observation: the Swedish automotive services market was overdue for innovation. Not innovation in service delivery—workshop owners already excelled at that. But innovation in how these businesses could collaborate, scale, and thrive in an increasingly challenging market.' },
        { type: 'paragraph', content: 'Two years later, we\'re building Sweden\'s first true tire services platform—a network that combines local expertise with shared resources, preserves brand identity while delivering operational excellence, and creates value for workshop owners, employees, and customers alike.' },
        { type: 'heading', level: 2, content: 'The Genesis', id: 'genesis' },
        { type: 'paragraph', content: 'The idea for AutoCap emerged from conversations with workshop owners across Sweden. Time and again, we heard similar challenges: rising supplier costs, difficulty attracting skilled technicians, expensive technology investments, and increasing competition from chains and online retailers.' },
        { type: 'paragraph', content: 'Yet these same owners were deeply committed to their businesses, their employees, and their communities. They weren\'t looking to sell out and retire—they wanted to grow and compete. What they needed was a model that provided scale benefits without requiring them to surrender what made their businesses special.' },
        { type: 'quote', content: 'We asked ourselves: what if consolidation didn\'t mean homogenization? What if you could have the benefits of scale while preserving local identity and autonomy?', attribution: 'Erik Johansson', role: 'CEO, AutoCap Group' },
        { type: 'heading', level: 2, content: 'The Partnership Model', id: 'partnership-model' },
        { type: 'paragraph', content: 'Our partnership model rests on three core principles that differentiate us from traditional consolidation approaches:' },
        { type: 'heading', level: 3, content: '1. Brand Preservation', id: 'brand-preservation' },
        { type: 'paragraph', content: 'Partners maintain their brand names and local market identity. A customer visiting Däck & Fälg Specialized in Malmö or Kungsbacka Hjulcenter on the west coast experiences the same local workshop they\'ve always known—because it is.' },
        { type: 'heading', level: 3, content: '2. Operational Autonomy', id: 'operational-autonomy' },
        { type: 'paragraph', content: 'Local management teams make decisions about pricing, service offerings, staffing, and customer relationships. We provide resources and support, but operational choices remain local.' },
        { type: 'heading', level: 3, content: '3. Shared Resources', id: 'shared-resources' },
        { type: 'paragraph', content: 'Partners access group purchasing power, shared technology infrastructure, professional development programs, and financial resources for facility improvements. They gain the advantages of scale without losing what makes them successful.' },
        { type: 'callout', variant: 'highlight', content: 'This model allows independent workshops to compete with chains on efficiency and resources while maintaining the personalized service and community connections that customers value.' },
        { type: 'heading', level: 2, content: 'Early Learnings', id: 'early-learnings' },
        { type: 'paragraph', content: 'Building a new model meant learning through experience. Some lessons came easily, others required adjustment and humility:' },
        { type: 'list', style: 'bullet', items: [
          'Trust takes time. Workshop owners need to see results before fully embracing shared resources.',
          'Technology adoption varies widely. Some partners embrace digital tools immediately, others need more support.',
          'Local market dynamics matter more than we initially expected. What works in Stockholm may need adjustment in Gothenburg.',
          'Employee engagement requires intentional effort. Team members need to understand how partnerships benefit them.',
          'Customer communication is critical. Transparency about ownership changes prevents confusion and maintains trust.',
        ] },
        { type: 'heading', level: 2, content: 'Building the Platform', id: 'building-platform' },
        { type: 'paragraph', content: 'Our platform strategy focuses on four key areas where collaboration creates value:' },
        { type: 'heading', level: 3, content: 'Procurement Excellence', id: 'procurement' },
        { type: 'paragraph', content: 'Aggregating purchasing across partners delivers significant cost savings on tires, parts, equipment, and supplies. These savings flow directly to partner businesses, improving margins while enabling competitive pricing.' },
        { type: 'heading', level: 3, content: 'Technology Infrastructure', id: 'technology' },
        { type: 'paragraph', content: 'Modern workshop management software, customer relationship systems, and diagnostic tools require substantial investment. Sharing these costs across the platform makes cutting-edge technology accessible to businesses of all sizes.' },
        { type: 'heading', level: 3, content: 'Talent Development', id: 'talent' },
        { type: 'paragraph', content: 'Attracting and retaining skilled technicians is one of the industry\'s biggest challenges. Our platform provides professional development programs, career advancement opportunities, and competitive compensation packages that individual workshops struggle to offer alone.' },
        { type: 'heading', level: 3, content: 'Financial Resources', id: 'financial' },
        { type: 'paragraph', content: 'Facility upgrades, equipment investments, and growth initiatives require capital that many workshop owners can\'t easily access. The platform provides financial resources to make these investments while partners maintain operational control.' },
        { type: 'callout', variant: 'info', content: 'Partners have invested over 15 million SEK in facility improvements and equipment upgrades since joining the AutoCap platform—investments that strengthen their competitive position and enhance customer experience.' },
        { type: 'heading', level: 2, content: 'Looking Ahead', id: 'looking-ahead' },
        { type: 'paragraph', content: 'We\'re still early in this journey. Our current network spans Stockholm, southern Sweden, and now the Västra Götaland region, but our vision extends across Sweden and eventually into neighboring markets.' },
        { type: 'paragraph', content: 'Success will come from remaining true to our partnership principles while continuously improving the value we deliver. We\'re building a platform that workshop owners want to join, where employees want to work, and where customers receive exceptional service.' },
        { type: 'paragraph', content: 'We\'re building more than a network of workshops. We\'re building a new model for how independent businesses can thrive in an era of consolidation—preserving what makes them special while gaining the resources to compete and grow.' },
        { type: 'quote', content: 'The future of automotive services isn\'t about choosing between local independence and scalable efficiency. It\'s about building platforms that deliver both. That\'s what we\'re creating at AutoCap.', attribution: 'AutoCap Leadership Team' },
      ],
    },
  ],
  pageMetadata: {
    title: 'News & Media · AutoCap Group',
    description: 'Latest news, press releases, and insights from AutoCap Group - building Sweden\'s tire services platform.',
  },
}

// Helper functions
export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsContent.articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(articleId: string, limit = 3): NewsArticle[] {
  const article = newsContent.articles.find((a) => a.id === articleId)
  if (!article) return []

  // Priority 1: Manually curated related articles
  if (article.relatedArticleIds?.length) {
    return article.relatedArticleIds
      .map((id) => newsContent.articles.find((a) => a.id === id))
      .filter((a): a is NewsArticle => a !== undefined)
      .slice(0, limit)
  }

  // Priority 2: Same category (excluding current article)
  return newsContent.articles
    .filter((a) => a.id !== articleId && a.category === article.category)
    .slice(0, limit)
}
