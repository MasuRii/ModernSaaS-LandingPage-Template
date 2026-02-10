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
        - region "Contact Hero Section" [ref=e34]:
            - img "Decorative gradient background"
            - generic [ref=e37]:
                - heading "Get in touch" [level=1] [ref=e38]
                - paragraph [ref=e39]:
                    Get in touch with the ModernSaaS team. We're here to help
                    with any questions.
        - generic [ref=e44]:
            - generic [ref=e45]:
                - generic [ref=e46]:
                    - generic [ref=e47]: Full Name
                    - textbox "Full Name" [ref=e49]:
                        - /placeholder: John Doe
                - generic [ref=e50]:
                    - generic [ref=e51]: Email Address
                    - textbox "Email Address" [ref=e53]:
                        - /placeholder: john@example.com
            - generic [ref=e54]:
                - generic [ref=e55]:
                    - generic [ref=e56]: Company (Optional)
                    - textbox "Company (Optional)" [ref=e58]:
                        - /placeholder: Acme Inc.
                - generic [ref=e59]:
                    - generic [ref=e60]: Inquiry Type
                    - generic [ref=e61]:
                        - combobox "Inquiry Type" [ref=e62]:
                            - option "Select an inquiry type" [selected]
                            - option "General Inquiry"
                            - option "Sales & Pricing"
                            - option "Technical Support"
                            - option "Partnership"
                            - option "Press & Media"
                        - generic:
                            - img
            - generic [ref=e63]:
                - generic [ref=e64]:
                    - generic [ref=e65]: Message
                    - generic [ref=e66]: 0 / 1000
                - textbox "Message" [ref=e68]:
                    - /placeholder: How can we help you?
            - button "Send Message" [ref=e69] [cursor=pointer]:
                - img [ref=e71]
                - generic [ref=e74]: Send Message
            - paragraph [ref=e75]:
                - text: By submitting this form, you agree to our
                - link "Privacy Policy" [ref=e76] [cursor=pointer]:
                    - /url: /privacy/
                - text: .
        - generic [ref=e80]:
            - generic [ref=e81]:
                - heading "Other ways to connect" [level=2] [ref=e82]
                - paragraph [ref=e83]:
                    Prefer a direct line? Reach out through any of these
                    channels and we'll get back to you as soon as possible.
                - generic [ref=e84]:
                    - heading "Follow our journey" [level=3] [ref=e85]
                    - generic [ref=e86]:
                        - ? button "Follow us on Twitter" [ref=e87]
                            [cursor=pointer]
                          : - img [ref=e88]
                        - button "Star us on GitHub" [ref=e90] [cursor=pointer]:
                            - img [ref=e91]
                        - ? button "Connect on LinkedIn" [ref=e94]
                            [cursor=pointer]
                          : - img [ref=e95]
            - generic [ref=e99]:
                - ? button "Support Email Us Our team is here to help with any
                    questions. hello@modernsaas.dev" [ref=e101] [cursor=pointer]
                  : - generic [ref=e103]:
                        - img [ref=e105]
                        - generic [ref=e108]:
                            - generic [ref=e109]: Support
                            - heading "Email Us" [level=3] [ref=e110]
                            - paragraph [ref=e111]:
                                Our team is here to help with any questions.
                            - generic [ref=e112]: hello@modernsaas.dev
                - ? button "Sales Sales Inquiries Talk to our sales team about
                    enterprise solutions. sales@modernsaas.dev" [ref=e114]
                    [cursor=pointer]
                  : - generic [ref=e116]:
                        - img [ref=e118]
                        - generic [ref=e120]:
                            - generic [ref=e121]: Sales
                            - heading "Sales Inquiries" [level=3] [ref=e122]
                            - paragraph [ref=e123]:
                                Talk to our sales team about enterprise
                                solutions.
                            - generic [ref=e124]: sales@modernsaas.dev
                - ? button "General Phone Available Mon-Fri, 9am-6pm PST. +1
                    (555) 123-4567" [ref=e126] [cursor=pointer]
                  : - generic [ref=e128]:
                        - img [ref=e130]
                        - generic [ref=e132]:
                            - generic [ref=e133]: General
                            - heading "Phone" [level=3] [ref=e134]
                            - paragraph [ref=e135]:
                                Available Mon-Fri, 9am-6pm PST.
                            - generic [ref=e136]: +1 (555) 123-4567
                - ? button "Location Office Visit our headquarters in San
                    Francisco. 123 Innovation Drive, Suite 400, San Francisco,
                    CA 94105" [ref=e138] [cursor=pointer]
                  : - generic [ref=e140]:
                        - img [ref=e142]
                        - generic [ref=e145]:
                            - generic [ref=e146]: Location
                            - heading "Office" [level=3] [ref=e147]
                            - paragraph [ref=e148]:
                                Visit our headquarters in San Francisco.
                            - generic [ref=e149]:
                                123 Innovation Drive, Suite 400, San Francisco,
                                CA 94105
        - generic [ref=e151]:
            - generic [ref=e152]:
                - heading "Visit our headquarters" [level=2] [ref=e153]
                - paragraph [ref=e154]:
                    Located in the heart of San Francisco's innovation district.
            - generic [ref=e155]:
                - img [ref=e162]
                - generic [ref=e165]:
                    - generic [ref=e166]: +
                    - generic [ref=e167]: '-'
                - generic [ref=e169]:
                    - heading "San Francisco HQ" [level=3] [ref=e170]
                    - paragraph [ref=e171]:
                        - text: 123 Innovation Drive, Suite 400
                        - text: San Francisco, CA 94105
                    - button "Get Directions" [ref=e172] [cursor=pointer]
        - generic [ref=e174]:
            - generic [ref=e175]:
                - heading "Support FAQ" [level=2] [ref=e176]
                - paragraph [ref=e177]:
                    Quick answers to common questions about our support and
                    services.
            - generic [ref=e179]:
                - ? button "How quickly will I receive a response?" [ref=e181]
                    [cursor=pointer]
                  : - text: How quickly will I receive a response?
                    - img [ref=e182]
                - ? button "Do you offer custom enterprise solutions?"
                    [ref=e185] [cursor=pointer]
                  : - text: Do you offer custom enterprise solutions?
                    - img [ref=e186]
                - ? button "What are your support hours?" [ref=e189]
                    [cursor=pointer]
                  : - text: What are your support hours?
                    - img [ref=e190]
                - ? button "Can I schedule a live product demo?" [ref=e193]
                    [cursor=pointer]
                  : - text: Can I schedule a live product demo?
                    - img [ref=e194]
    - contentinfo "Site footer" [ref=e196]:
        - generic [ref=e199]:
            - generic [ref=e200]:
                - heading "Stay ahead of the curve" [level=3] [ref=e201]
                - paragraph [ref=e202]:
                    Get the latest updates on product features, industry
                    insights, and automation tips delivered to your inbox.
            - generic [ref=e203]:
                - generic [ref=e204]:
                    - textbox "Email address for newsletter" [ref=e205]:
                        - /placeholder: Enter your email
                    - button "Subscribe" [ref=e206] [cursor=pointer]:
                        - text: Subscribe
                        - img [ref=e207]
                - paragraph [ref=e210]:
                    We respect your privacy. Unsubscribe at any time.
        - generic [ref=e212]:
            - generic [ref=e213]:
                - link "ModernSaaS - Home" [ref=e214] [cursor=pointer]:
                    - /url: /
                    - img [ref=e216]
                    - generic [ref=e218]: ModernSaaS
                - paragraph [ref=e219]:
                    ModernSaaS helps teams streamline workflows, automate
                    repetitive tasks, and ship products faster with AI-powered
                    tools.
                - generic [ref=e220]:
                    - link "Follow us on Twitter" [ref=e221] [cursor=pointer]:
                        - /url: https://twitter.com/modernsaas
                        - img [ref=e222]
                    - link "View our GitHub" [ref=e224] [cursor=pointer]:
                        - /url: https://github.com/modernsaas
                        - img [ref=e225]
                    - link "Connect on LinkedIn" [ref=e228] [cursor=pointer]:
                        - /url: https://linkedin.com/company/modernsaas
                        - img [ref=e229]
                    - link "Join our Discord" [ref=e233] [cursor=pointer]:
                        - /url: https://discord.gg/modernsaas
                        - img [ref=e234]
                    - link "Subscribe on YouTube" [ref=e236] [cursor=pointer]:
                        - /url: https://youtube.com/@modernsaas
                        - img [ref=e237]
            - generic [ref=e240]:
                - heading "Product" [level=4] [ref=e241]
                - list [ref=e242]:
                    - listitem [ref=e243]:
                        - link "Features" [ref=e244] [cursor=pointer]:
                            - /url: /features/
                    - listitem [ref=e245]:
                        - link "Pricing" [ref=e246] [cursor=pointer]:
                            - /url: /pricing/
                    - listitem [ref=e247]:
                        - link "Changelog" [ref=e248] [cursor=pointer]:
                            - /url: /changelog/
                    - listitem [ref=e249]:
                        - link "Roadmap" [ref=e250] [cursor=pointer]:
                            - /url: /roadmap/
            - generic [ref=e251]:
                - heading "Company" [level=4] [ref=e252]
                - list [ref=e253]:
                    - listitem [ref=e254]:
                        - link "About" [ref=e255] [cursor=pointer]:
                            - /url: /about/
                    - listitem [ref=e256]:
                        - link "Blog" [ref=e257] [cursor=pointer]:
                            - /url: /blog/
                    - listitem [ref=e258]:
                        - link "Contact" [ref=e259] [cursor=pointer]:
                            - /url: /contact/
                    - listitem [ref=e260]:
                        - link "Careers" [ref=e261] [cursor=pointer]:
                            - /url: /about/
            - generic [ref=e262]:
                - heading "Resources" [level=4] [ref=e263]
                - list [ref=e264]:
                    - listitem [ref=e265]:
                        - link "Documentation" [ref=e266] [cursor=pointer]:
                            - /url: /features/
                    - listitem [ref=e267]:
                        - link "Help Center" [ref=e268] [cursor=pointer]:
                            - /url: /support/
                    - listitem [ref=e269]:
                        - link "API Reference" [ref=e270] [cursor=pointer]:
                            - /url: /features/
                    - listitem [ref=e271]:
                        - link "Status" [ref=e272] [cursor=pointer]:
                            - /url: https://status.modernsaas.dev
            - generic [ref=e273]:
                - heading "Legal" [level=4] [ref=e274]
                - list [ref=e275]:
                    - listitem [ref=e276]:
                        - link "Privacy Policy" [ref=e277] [cursor=pointer]:
                            - /url: /privacy/
                    - listitem [ref=e278]:
                        - link "Terms of Service" [ref=e279] [cursor=pointer]:
                            - /url: /terms/
        - generic [ref=e282]:
            - generic [ref=e283]:
                - generic [ref=e284]:
                    © 2026 ModernSaaS Inc. All rights reserved.
                - generic [ref=e285]: ·
                - generic [ref=e286]: Registered in Delaware, USA
            - link "hello@modernsaas.dev" [ref=e288] [cursor=pointer]:
                - /url: mailto:hello@modernsaas.dev
                - img [ref=e289]
                - generic [ref=e292]: hello@modernsaas.dev
    - generic [ref=e295]:
        - button "Menu" [ref=e296]:
            - img [ref=e298]
            - generic: Menu
        - button "Inspect" [ref=e302]:
            - img [ref=e304]
            - generic: Inspect
        - button "Audit" [ref=e306]:
            - generic [ref=e307]:
                - img [ref=e308]
                - img [ref=e311]
            - generic: Audit
        - button "Settings" [ref=e314]:
            - img [ref=e316]
            - generic: Settings
```
