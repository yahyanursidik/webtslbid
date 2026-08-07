# 07 — Content Model

Gunakan Astro Content Collections.

## Collections
```text
src/content/
├── subjects/
├── teachers/
├── articles/
├── announcements/
├── faqs/
├── testimonials/
└── quotes/
```

## Subject
```yaml
title:
slug:
order:
summary:
description:
learningObjectives:
teacherIds:
category:
status:
seoTitle:
seoDescription:
```

## Teacher
```yaml
name:
slug:
photo:
shortBio:
bio:
subjects:
status:
seoTitle:
seoDescription:
```

## Quote
```yaml
id:
scholar:
arabicName:
quote:
translation:
sourceTitle:
sourceDetail:
themes:
verified:
reviewedBy:
reviewedAt:
status:
```

## Article
```yaml
title:
slug:
summary:
publishedAt:
updatedAt:
author:
reviewedBy:
category:
tags:
heroImage:
status:
seoTitle:
seoDescription:
```

## FAQ
```yaml
question:
answer:
order:
category:
status:
```
