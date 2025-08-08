import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Trophy } from "lucide-react";
import { CourseStats } from "@/types/users";

interface StudentProgressProps {
  stats: CourseStats;
  title?: string;
}

export const StudentProgress = ({ stats, title = "Overview" }: StudentProgressProps) => {
  const progressItems = [
    { 
      label: "Total Students", 
      value: stats.totalStudents, 
      icon: BookOpen,
      color: "text-primary"
    },
    { 
      label: "Active", 
      value: stats.activeStudents, 
      icon: Clock,
      color: "text-blue-600"
    },
    { 
      label: "Completed", 
      value: stats.completedStudents, 
      icon: Trophy,
      color: "text-accent"
    },
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-6">{title}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {progressItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-3">
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <p className="text-2xl font-bold text-primary">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Average Progress</span>
            <span className="font-medium text-primary">
              {Math.round(stats.averageProgress)}%
            </span>
          </div>
          <Progress value={stats.averageProgress} />
        </div>
      </CardContent>
    </Card>
  );
};