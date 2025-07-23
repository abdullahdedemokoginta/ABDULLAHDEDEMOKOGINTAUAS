import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatsCardsProps {
  stats: {
    totalUsers: number;
    totalBooks: number;
    activeLoans: number;
    overdueLoans: number;
  };
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cardData = [
    { title: 'Total Users', value: stats.totalUsers, description: 'Registered members' },
    { title: 'Total Books', value: stats.totalBooks, description: 'In collection' },
    { title: 'Active Loans', value: stats.activeLoans, description: 'Currently borrowed' },
    { title: 'Overdue Loans', value: stats.overdueLoans, description: 'Past due date' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-gray-500">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}