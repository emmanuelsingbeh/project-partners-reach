import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { X, Settings, Cookie } from 'lucide-react';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';

export const CookieConsentBanner = () => {
  const { showBanner, preferences, acceptAll, acceptNecessary, updatePreferences } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    updatePreferences(tempPreferences);
    setShowSettings(false);
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
      <Card className="max-w-4xl mx-auto shadow-elegant">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                We value your privacy
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{' '}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={acceptNecessary} variant="outline" size="sm">
                  Necessary Only
                </Button>
                <Dialog open={showSettings} onOpenChange={setShowSettings}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Cookie className="h-5 w-5" />
                        Cookie Preferences
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
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
                          onClick={() => {
                            setTempPreferences({
                              necessary: true,
                              analytics: true,
                              marketing: true,
                              functional: true,
                            });
                            handleSavePreferences();
                          }} 
                          variant="outline" 
                          className="flex-1"
                        >
                          Accept All
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button onClick={acceptAll} size="sm">
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};