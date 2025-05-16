import { MeetingData } from './types';

export const mockMeetingData: MeetingData = {
  id: 'meeting-2025-04-10',
  date: '2025-04-10',
  title: 'Morning Market Update',
  keyTakeaways: [
    'CPI came in hotter than expected (3.1% vs. 2.9%). Fed likely to stay on hold.',
    'Tech stocks declining as yields rise; consider rotation to value and dividend stocks.',
    'New SALT deduction bill gaining traction; may impact high-tax state residents.',
    'Geopolitical tensions increasing supply chain disruptions in semiconductors.'
  ],
  slides: [
    {
      id: 'slide-1',
      title: 'Market Update',
      description: 'Overview of market conditions and key indices performance',
      thumbnailUrl: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      fullSizeUrl: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'slide-2',
      title: 'CPI Analysis',
      description: 'Detailed breakdown of inflation data and potential implications',
      thumbnailUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      fullSizeUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'slide-3',
      title: 'Positioning Shift',
      description: 'Recommended portfolio adjustments based on current conditions',
      thumbnailUrl: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      fullSizeUrl: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'slide-4',
      title: 'Legislative Watch: SALT Deduction Repeal?',
      description: 'Analysis of potential tax legislation and implications for clients',
      thumbnailUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      fullSizeUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ],
  transcript: [
    {
      speaker: 'Sarah Chen, Chief Market Strategist',
      timestamp: '2025-04-10T08:30:00Z',
      text: 'Good morning everyone. Let\'s dive into today\'s market update. The big news this morning is the CPI report which came in at 3.1%, slightly above the expected 2.9%.',
      isHighlighted: true
    },
    {
      speaker: 'James Wilson, Fixed Income Specialist',
      timestamp: '2025-04-10T08:32:15Z',
      text: 'That\'s right, Sarah. This higher-than-expected inflation reading suggests the Fed may need to remain cautious about rate cuts in the near term. We\'re seeing Treasury yields move higher in response.',
      isHighlighted: false
    },
    {
      speaker: 'Sarah Chen, Chief Market Strategist',
      timestamp: '2025-04-10T08:35:30Z',
      text: 'Exactly, and this is having an immediate impact on tech stocks, which are particularly sensitive to changes in interest rate expectations. The Nasdaq is down about 1.2% in pre-market trading.',
      isHighlighted: true
    },
    {
      speaker: 'Michael Rodriguez, Equity Strategist',
      timestamp: '2025-04-10T08:38:45Z',
      text: 'For our clients who are overweight technology, this might be a good time to consider trimming some high-duration names and rotating into value and dividend stocks that tend to perform better in a rising rate environment.',
      isHighlighted: false
    },
    {
      speaker: 'Lisa Park, Policy Analyst',
      timestamp: '2025-04-10T08:42:15Z',
      text: 'I also want to highlight the developing situation with the SALT deduction legislation. The new bill is gaining traction and could significantly impact clients in high-tax states like New York, California, and New Jersey.',
      isHighlighted: true
    },
    {
      speaker: 'Sarah Chen, Chief Market Strategist',
      timestamp: '2025-04-10T08:45:30Z',
      text: 'Thank you Lisa. Let\'s also note the ongoing geopolitical tensions that are contributing to supply chain disruptions, particularly in the semiconductor industry. This could have implications for tech companies\' earnings in the coming quarters.',
      isHighlighted: false
    }
  ],
  coachIdeas: [
    {
      id: 'idea-1',
      category: 'client-talking-points',
      title: 'Inflation Update for Fixed Income Clients',
      content: 'Today\'s higher-than-expected CPI reading (3.1% vs 2.9%) suggests the Fed may delay rate cuts. Consider discussing with fixed income clients how this might affect their portfolios and whether they should consider adjusting duration exposure or exploring inflation-protected securities.',
      source: {
        type: 'slide',
        slideNumber: 2,
        title: 'CPI Analysis',
        thumbnailUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      id: 'idea-2',
      category: 'trade-ideas',
      title: 'Tech Exposure Adjustment',
      content: 'With tech stocks declining as yields rise, consider suggesting a rotation from high-duration tech names to value and dividend stocks. Specifically, look at sectors like financials, healthcare, and consumer staples that have historically performed better in rising rate environments.',
      source: {
        type: 'transcript',
        timestamp: '2025-04-10T08:38:45Z',
        title: 'Equity Strategy Discussion',
        thumbnailUrl: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    },
    {
      id: 'idea-3',
      category: 'policy-updates',
      title: 'SALT Deduction Impact on High-Tax State Residents',
      content: 'The proposed SALT deduction legislation could significantly impact clients in NY, CA, and NJ. For clients with income over $400K in these states, consider reviewing their tax planning strategies and discussing potential adjustments to their investment approach to optimize after-tax returns.',
      source: {
        type: 'slide',
        slideNumber: 4,
        title: 'Legislative Watch: SALT Deduction Repeal?',
        thumbnailUrl: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    }
  ]
};