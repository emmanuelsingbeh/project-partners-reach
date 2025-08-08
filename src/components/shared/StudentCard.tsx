import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, CheckCircle2, User } from "lucide-react";
import { Enrollment } from "@/types/users";

interface StudentCardProps {
  enrollment: Enrollment;
  onContinue?: () => void;
  onComplete?: () => void;
  isReadOnly?: boolean;
  showStudentInfo?: boolean;
  studentName?: string;
  className?: string;
}

export const StudentCard = ({ 
  enrollment, 
  onContinue, 
  onComplete, 
  isReadOnly = false,
  showStudentInfo = false,
  studentName,
  className = ""
}: StudentCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.3 }}
      className={`hover-scale ${className}`}
    >
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-primary text-lg flex items-center justify-between">
            <span>{enrollment.title}</span>
            {enrollment.status === "completed" ? (
              <Badge className="bg-accent text-white">Completed</Badge>
            ) : (
              <Badge variant="outline">
                {enrollment.status === "in_progress" ? "In Progress" : "Enrolled"}
              </Badge>
            )}
          </CardTitle>
          {showStudentInfo && studentName && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{studentName}</span>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{enrollment.description}</p>
          
          <div>
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary font-medium">{enrollment.progress}%</span>
            </div>
            <Progress value={enrollment.progress} />
          </div>

          {enrollment.grade && (
            <div className="text-sm">
              <span className="text-muted-foreground">Grade: </span>
              <span className="font-medium text-primary">{enrollment.grade}%</span>
            </div>
          )}

          {!isReadOnly && (
            <div className="flex gap-2">
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={onContinue}
              >
                <Play className="h-4 w-4 mr-2" />
                {enrollment.progress > 0 ? "Continue" : "Start"}
              </Button>
              {enrollment.status !== "completed" && onComplete && (
                <Button 
                  variant="outline" 
                  onClick={onComplete}
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" /> 
                  Mark Complete
                </Button>
              )}
            </div>
          )}

          {isReadOnly && enrollment.completedAt && (
            <div className="text-xs text-muted-foreground">
              Completed: {new Date(enrollment.completedAt).toLocaleDateString()}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};