import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Cookie, Settings } from 'lucide-react';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';

interface CookiePreferencesModalProps {
  trigger?: React.ReactNode;
}

export const CookiePreferencesModal = ({ trigger }: CookiePreferencesModalProps) => {
  const { preferences, updatePreferences, resetConsent } = useCookieConsent();
  const [open, setOpen] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

  const handleSavePreferences = () => {
    updatePreferences(tempPreferences);
    setOpen(false);
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      required: true,
    },
    {
      key: 'functional' as keyof CookiePreferences,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as language preferences.',
      required: false,
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      required: false,
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites for advertising and marketing purposes.',
      required: false,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Cookie Settings
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Cookie className="h-5 w-5" />
            Cookie Preferences
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Manage your cookie preferences. You can enable or disable different types of cookies below.
            Note that disabling some cookies may affect your experience on our website.
          </p>
          
          {cookieTypes.map((type) => (
            <div key={type.key} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor={type.key} className="text-base font-medium">
                    {type.title}
                    {type.required && (
                      <span className="text-xs text-muted-foreground ml-2">(Required)</span>
                    )}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </div>
                <Switch
                  id={type.key}
                  checked={tempPreferences[type.key]}
                  onCheckedChange={(checked) =>
                    setTempPreferences(prev => ({ ...prev, [type.key]: checked }))
                  }
                  disabled={type.required}
                />
              </div>
              {type.key !== 'marketing' && <Separator />}
            </div>
          ))}
          
          <div className="flex gap-3 pt-4">
            <Button onClick={handleSavePreferences} className="flex-1">
              Save Preferences
            </Button>
            <Button 
              onClick={resetConsent} 
              variant="outline" 
              className="flex-1"
            >
              Reset All
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};