# Page snapshot

```yaml
- generic [active] [ref=e1]:
    - link "Skip to content" [ref=e2] [cursor=pointer]:
        - /url: '#main-content'
    - banner "Site header" [ref=e4]:
        - generic [ref=e6]:
            - link "ModernSaaS - Home" [ref=e7] [cursor=pointer]:
                - /url: /
                - img [ref=e9]
                - generic [ref=e11]: ModernSaaS
            - navigation "Main navigation" [ref=e12]:
                - link "Features" [ref=e13] [cursor=pointer]:
                    - /url: /features/
                - link "Pricing" [ref=e14] [cursor=pointer]:
                    - /url: /pricing/
                - link "About" [ref=e15] [cursor=pointer]:
                    - /url: /about/
                - link "Blog" [ref=e16] [cursor=pointer]:
                    - /url: /blog/
                - link "Contact" [ref=e17] [cursor=pointer]:
                    - /url: /contact/
            - generic [ref=e18]:
                - button "Toggle theme" [ref=e19] [cursor=pointer]:
                    - generic [ref=e20]: Switch to dark mode
                    - img [ref=e21]
                - link "Get Started" [ref=e31] [cursor=pointer]:
                    - /url: /signup/
    - main "Main content" [ref=e32]:
        - generic [ref=e35]:
            - heading "Changelog" [level=1] [ref=e36]
            - paragraph [ref=e37]:
                Stay up to date with the latest features, improvements, and
                fixes to ModernSaaS.
        - generic [ref=e41]:
            - generic [ref=e44]:
                - generic [ref=e45]:
                    - generic [ref=e47]: v1.2.0
                    - generic [ref=e48]:
                        - img [ref=e49]
                        - time [ref=e54]: February 5, 2026
                - generic [ref=e57]:
                    - heading "Advanced Analytics & Team Collaboration"
                      [level=2] [ref=e58]
                    - generic [ref=e59]:
                        - generic [ref=e60]:
                            - img [ref=e62]
                            - generic [ref=e64]:
                                - generic [ref=e66]: Feature
                                - paragraph [ref=e67]:
                                    New Real-time Analytics Dashboard with
                                    customizable widgets and export
                                    capabilities.
                        - generic [ref=e68]:
                            - img [ref=e70]
                            - generic [ref=e72]:
                                - generic [ref=e74]: Feature
                                - paragraph [ref=e75]:
                                    Multi-player editing for shared automation
                                    flows with presence indicators.
                        - generic [ref=e76]:
                            - img [ref=e78]
                            - generic [ref=e81]:
                                - generic [ref=e83]: Improvement
                                - paragraph [ref=e84]:
                                    Enhanced search performance in the dashboard
                                    by 40% using new indexing strategy.
                        - generic [ref=e85]:
                            - img [ref=e87]
                            - generic [ref=e99]:
                                - generic [ref=e101]: Fix
                                - paragraph [ref=e102]:
                                    Resolved a bug where some dark mode icons
                                    were low contrast in high-intensity light
                                    environments.
            - generic [ref=e105]:
                - generic [ref=e106]:
                    - generic [ref=e108]: v1.1.5
                    - generic [ref=e109]:
                        - img [ref=e110]
                        - time [ref=e115]: January 20, 2026
                - generic [ref=e119]:
                    - generic [ref=e120]:
                        - img [ref=e122]
                        - generic [ref=e125]:
                            - generic [ref=e127]: Improvement
                            - paragraph [ref=e128]:
                                Upgraded all internal AI models to GPT-5 Turbo
                                for faster and more accurate text generation.
                    - generic [ref=e129]:
                        - img [ref=e131]
                        - generic [ref=e134]:
                            - generic [ref=e136]: Improvement
                            - paragraph [ref=e137]:
                                Streamlined the onboarding flow for new team
                                members with a guided interactive tour.
                    - generic [ref=e138]:
                        - img [ref=e140]
                        - generic [ref=e152]:
                            - generic [ref=e154]: Fix
                            - paragraph [ref=e155]:
                                Fixed an issue with stripe checkout redirection
                                for certain European bank accounts.
            - generic [ref=e158]:
                - generic [ref=e159]:
                    - generic [ref=e161]: v1.1.0
                    - generic [ref=e162]:
                        - img [ref=e163]
                        - time [ref=e168]: December 15, 2025
                - generic [ref=e171]:
                    - heading "The Automation Update" [level=2] [ref=e172]
                    - generic [ref=e173]:
                        - generic [ref=e174]:
                            - img [ref=e176]
                            - generic [ref=e178]:
                                - generic [ref=e180]: Feature
                                - paragraph [ref=e181]:
                                    New workflow automation engine with over 50
                                    pre-built templates for common tasks.
                        - generic [ref=e182]:
                            - img [ref=e184]
                            - generic [ref=e186]:
                                - generic [ref=e188]: Feature
                                - paragraph [ref=e189]:
                                    Native Discord and Slack integrations for
                                    real-time notification alerts.
                        - generic [ref=e190]:
                            - img [ref=e192]
                            - generic [ref=e204]:
                                - generic [ref=e206]: Fix
                                - paragraph [ref=e207]:
                                    Corrected typography alignment issues in the
                                    pricing table on tablet devices.
            - generic [ref=e209]:
                - generic [ref=e210]:
                    - generic [ref=e212]: v1.0.0
                    - generic [ref=e213]:
                        - img [ref=e214]
                        - time [ref=e219]: November 1, 2025
                - generic [ref=e222]:
                    - heading "Public Launch" [level=2] [ref=e223]
                    - generic [ref=e224]:
                        - generic [ref=e225]:
                            - img [ref=e227]
                            - generic [ref=e229]:
                                - generic [ref=e231]: Feature
                                - paragraph [ref=e232]:
                                    Initial public release of ModernSaaS with
                                    core dashboard, user auth, and basic
                                    analytics.
                        - generic [ref=e233]:
                            - img [ref=e235]
                            - generic [ref=e237]:
                                - generic [ref=e239]: Feature
                                - paragraph [ref=e240]:
                                    Dark mode support implemented across the
                                    entire application.
    - contentinfo "Site footer" [ref=e241]:
        - generic [ref=e244]:
            - generic [ref=e245]:
                - heading "Stay ahead of the curve" [level=3] [ref=e246]
                - paragraph [ref=e247]:
                    Get the latest updates on product features, industry
                    insights, and automation tips delivered to your inbox.
            - generic [ref=e248]:
                - generic [ref=e249]:
                    - textbox "Email address for newsletter" [ref=e250]:
                        - /placeholder: Enter your email
                    - button "Subscribe" [ref=e251] [cursor=pointer]:
                        - text: Subscribe
                        - img [ref=e252]
                - paragraph [ref=e255]:
                    We respect your privacy. Unsubscribe at any time.
        - generic [ref=e257]:
            - generic [ref=e258]:
                - link "ModernSaaS - Home" [ref=e259] [cursor=pointer]:
                    - /url: /
                    - img [ref=e261]
                    - generic [ref=e263]: ModernSaaS
                - paragraph [ref=e264]:
                    ModernSaaS helps teams streamline workflows, automate
                    repetitive tasks, and ship products faster with AI-powered
                    tools.
                - generic [ref=e265]:
                    - link "Follow us on Twitter" [ref=e266] [cursor=pointer]:
                        - /url: https://twitter.com/modernsaas
                        - img [ref=e267]
                    - link "View our GitHub" [ref=e269] [cursor=pointer]:
                        - /url: https://github.com/modernsaas
                        - img [ref=e270]
                    - link "Connect on LinkedIn" [ref=e273] [cursor=pointer]:
                        - /url: https://linkedin.com/company/modernsaas
                        - img [ref=e274]
                    - link "Join our Discord" [ref=e278] [cursor=pointer]:
                        - /url: https://discord.gg/modernsaas
                        - img [ref=e279]
                    - link "Subscribe on YouTube" [ref=e281] [cursor=pointer]:
                        - /url: https://youtube.com/@modernsaas
                        - img [ref=e282]
            - generic [ref=e285]:
                - heading "Product" [level=4] [ref=e286]
                - list [ref=e287]:
                    - listitem [ref=e288]:
                        - link "Features" [ref=e289] [cursor=pointer]:
                            - /url: /features/
                    - listitem [ref=e290]:
                        - link "Pricing" [ref=e291] [cursor=pointer]:
                            - /url: /pricing/
                    - listitem [ref=e292]:
                        - link "Changelog" [ref=e293] [cursor=pointer]:
                            - /url: /changelog/
                    - listitem [ref=e294]:
                        - link "Roadmap" [ref=e295] [cursor=pointer]:
                            - /url: /roadmap/
            - generic [ref=e296]:
                - heading "Company" [level=4] [ref=e297]
                - list [ref=e298]:
                    - listitem [ref=e299]:
                        - link "About" [ref=e300] [cursor=pointer]:
                            - /url: /about/
                    - listitem [ref=e301]:
                        - link "Blog" [ref=e302] [cursor=pointer]:
                            - /url: /blog/
                    - listitem [ref=e303]:
                        - link "Contact" [ref=e304] [cursor=pointer]:
                            - /url: /contact/
                    - listitem [ref=e305]:
                        - link "Careers" [ref=e306] [cursor=pointer]:
                            - /url: /about/
            - generic [ref=e307]:
                - heading "Resources" [level=4] [ref=e308]
                - list [ref=e309]:
                    - listitem [ref=e310]:
                        - link "Documentation" [ref=e311] [cursor=pointer]:
                            - /url: /features/
                    - listitem [ref=e312]:
                        - link "Help Center" [ref=e313] [cursor=pointer]:
                            - /url: /support/
                    - listitem [ref=e314]:
                        - link "API Reference" [ref=e315] [cursor=pointer]:
                            - /url: /features/
                    - listitem [ref=e316]:
                        - link "Status" [ref=e317] [cursor=pointer]:
                            - /url: https://status.modernsaas.dev
            - generic [ref=e318]:
                - heading "Legal" [level=4] [ref=e319]
                - list [ref=e320]:
                    - listitem [ref=e321]:
                        - link "Privacy Policy" [ref=e322] [cursor=pointer]:
                            - /url: /privacy/
                    - listitem [ref=e323]:
                        - link "Terms of Service" [ref=e324] [cursor=pointer]:
                            - /url: /terms/
        - generic [ref=e327]:
            - generic [ref=e328]:
                - generic [ref=e329]:
                    © 2026 ModernSaaS Inc. All rights reserved.
                - generic [ref=e330]: ·
                - generic [ref=e331]: Registered in Delaware, USA
            - link "hello@modernsaas.dev" [ref=e333] [cursor=pointer]:
                - /url: mailto:hello@modernsaas.dev
                - img [ref=e334]
                - generic [ref=e337]: hello@modernsaas.dev
    - generic [ref=e340]:
        - button "Menu" [ref=e341]:
            - img [ref=e343]
            - generic: Menu
        - button "Inspect" [ref=e347]:
            - img [ref=e349]
            - generic: Inspect
        - button "Audit" [ref=e351]:
            - img [ref=e353]
            - generic: Audit
        - button "Settings" [ref=e356]:
            - img [ref=e358]
            - generic: Settings
```
