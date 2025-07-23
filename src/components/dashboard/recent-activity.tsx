import { Book, Loan } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Repeat } from 'lucide-react'; // optional icons

interface RecentActivityProps {
  title: string;
  activities: Array<Book | Loan>;
  type: 'books' | 'loans';
}

export function RecentActivity({ title, activities, type }: RecentActivityProps) {
  return (
    <Card className="bg-white/5 border border-white/10 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-green-400 text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={type === 'books' ? (activity as Book).book_id : (activity as Loan).loan_id}
              className="flex items-start bg-green-500/5 hover:bg-green-500/10 transition rounded-xl px-4 py-3"
            >
              <div className="flex-shrink-0 pt-1">
                {type === 'books' ? (
                  <BookOpen className="h-5 w-5 text-green-400" />
                ) : (
                  <Repeat className="h-5 w-5 text-green-400" />
                )}
              </div>
              <div className="ml-4 space-y-1">
                {type === 'books' ? (
                  <>
                    <p className="text-sm font-medium text-white">
                      {(activity as Book).title}
                    </p>
                    <p className="text-sm text-green-300">
                      Penerbit: {(activity as Book).publisher}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-white">
                      Loan oleh User #{(activity as Loan).user_id}
                    </p>
                    <p className="text-sm text-green-300">
                      Buku ID: {(activity as Loan).book_id}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
