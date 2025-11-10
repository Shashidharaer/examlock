---
id: 0866ccaa-e973-473f-ad0f-2732ad5cfac2
blueprint: pages
title: Integration
author: 2af790dc-6a33-4420-b65c-d85232975e73
updated_by: 2af790dc-6a33-4420-b65c-d85232975e73
updated_at: 1762423550
blocks:
  -
    id: mhkgl9im
    badge_text: Integrations
    heading:
      text_in_black: 'Seamless Integration'
      text_in_primary: 'with ExamLock'
    description: 'Connect securely and scale easily with our SDKs, APIs, and flexible plugin support.'
    show_badge: true
    'book a demobutton_text': 'Book a Demo'
    type: page_hero
    enabled: true
    show_contact_button: false
    show_extension_button: false
    show_download_button: false
    show_book_a_demo: true
    show_book_a_demo_button: true
  -
    id: mhkh4tp0
    type: carousel_section
    enabled: true
    title: 'Integrations & Standards'
    description: 'Our platform is built for flexibility and compatibility, supporting a wide range of authentication protocols, learning standards, and payment gateways to suit your business needs.'
    show_badge: false
    cards:
      -
        id: mhkh5x0c
        card_title: 'SAML 2.0'
        card_description: 'Seamlessly exchange authentication data with any identity provider using the secure and widely adopted SAML 2.0 protocol. Simplify web-based user authentication across your organization.'
        type: cards
        enabled: true
      -
        id: mhkh6b2v
        card_title: NTLM
        card_description: 'Supports NTLM-based Single Sign-On (SSO) for stand-alone Windows systems that do not utilize the more modern and secure Microsoft Kerberos authentication.'
        type: cards
        enabled: true
      -
        id: mhkh6nnn
        card_title: 'Custom Plugin'
        card_description: 'Leverage our open-source JavaScript SDK to extend platform functionality and build custom integrations.'
        type: cards
        enabled: true
      -
        id: mhkh73ww
        card_title: 'LTI 1.3'
        card_description: 'Leverage our open-source JavaScript SDK to extend platform functionality and build custom integrations.'
        type: cards
        enabled: true
      -
        id: mhkh7if4
        card_title: 'Domain API'
        card_description: 'Leverage our open-source JavaScript SDK to extend platform functionality and build custom integrations.'
        type: cards
        enabled: true
  -
    id: mhkjeyzj
    badge_title: 'LTI Integration'
    title: 'LTI Integration'
    description: 'Developed by the IMS Global Learning Consortium, LTI is a standard used to integrate external learning applications and tools into a central LMS.'
    reverse: false
    centered: true
    info:
      -
        id: mhkjfh59
        title: 'Seamless integration:'
        details: 'LTI allows different educational tools to work together easily. For instance, an instructor can link to a third-party quiz or simulation from within their LMS, with a seamless single sign-on (SSO) experience for the user.'
        type: info
        enabled: true
      -
        id: mhkjfvif
        title: 'Extends functionality:'
        details: 'While it does not track learning progress in the same way as SCORM or xAPI, it allows platforms to integrate specialized external content to enrich the learning experience.'
        type: info
        enabled: true
    type: info_card
    enabled: true
    card_image:
      - products/integration.webp
  -
    id: mhkjtre1
    badge_title: 'xAPI (Experience API)'
    title: 'xAPI (Experience API)'
    description: 'xAPI, also known as Tin Can API, is the most common successor to SCORM. It focuses on gathering data on a wider range of learning experiences beyond traditional online courses.'
    reverse: true
    centered: true
    info:
      -
        id: mhkjub71
        title: 'Ease of use:'
        details: 'Unlike SCORM, which only tracks courses launched within a Learning Management System (LMS), xAPI can track learning activities that occur anywhere, including offline events, on mobile apps, or in simulations and games.'
        type: info
        enabled: true
      -
        id: mhkjunvj
        title: 'Wider tracking:'
        details: 'H5P is not limited to closed file formats like SCORM and gives designers more creative freedom.'
        type: info
        enabled: true
      -
        id: mhkjv0ey
        title: 'Richer data:'
        details: 'xAPI records detailed data using simple "actor-verb-object" statements (e.g., "John completed sales training"). This offers more granular insights into a learner''s behavior, which can be stored in a Learning Record Store (LRS).'
        type: info
        enabled: true
      -
        id: mhkjvhue
        title: 'Future-proofing:'
        details: 'xAPI is more mobile-friendly and adaptable to newer technologies like augmented and virtual reality. It allows for more personalized and data-driven learning programs.'
        type: info
        enabled: true
    type: info_card
    enabled: true
    card_image:
      - integration/xapi.webp
  -
    id: mhkk2ovk
    badge_title: SCORM
    title: SCORM
    description: 'e-learning standard include the Experience API (xAPI), cmi5, and Learning Tools Interoperability (LTI). While SCORM is still widely supported, these newer standards offer more robust tracking, support for mobile learning, and greater flexibility for modern e-learning.'
    reverse: false
    centered: true
    type: info_card
    enabled: true
    card_image:
      - integration/scorm.webp
  -
    id: mhkkbqya
    badge_title: cmi5
    title: cmi5
    description: "cmi5 is an xAPI-based specification that bridges the gap between SCORM and xAPI, providing a modern update that retains some of SCORM's familiar functionality. It is especially useful for organizations that need more than SCORM's basic tracking but aren't ready for a full transition to xAPI."
    reverse: false
    centered: true
    info:
      -
        id: mhkkcipv
        title: 'Structured xAPI:'
        details: 'It provides a specific profile for how an LMS and xAPI-enabled content communicate, defining rules for launching, reporting, and course structure.'
        type: info
        enabled: true
      -
        id: mhkkcrjh
        title: 'Improved security:'
        details: 'cmi5 handles secure authentication and data exchange more effectively than SCORM.'
        type: info
        enabled: true
      -
        id: mhkkd7h5
        title: 'Mobile and offline learning:'
        details: 'It provides better support for mobile and offline learning while still working within the traditional LMS framework.'
        type: info
        enabled: true
    type: info_card
    enabled: true
    card_image:
      - integration/cmi5.webp
  -
    id: mhkkfhge
    badge_title: 'H5P (HTML5 Package)'
    title: 'H5P (HTML5 Package)'
    description: 'H5P is an open-source framework used to create and share interactive HTML5 content, such as quizzes, interactive videos, and branching scenarios.'
    reverse: true
    centered: true
    info:
      -
        id: mhkjub71
        title: 'Ease of use:'
        details: 'Ease of use: It is easy to use, even for non-programmers, and integrates with platforms like Moodle and WordPress.'
        type: info
        enabled: true
      -
        id: mhkjunvj
        title: 'Flexibility:'
        details: 'H5P is not limited to closed file formats like SCORM and gives designers more creative freedom.'
        type: info
        enabled: true
      -
        id: mhkjv0ey
        title: 'Open source:'
        details: 'Because it is open source, H5P does not have licensing fees and offers more flexibility for long-term development.'
        type: info
        enabled: true
      -
        id: mhkjvhue
        title: 'For rich data and advanced tracking:'
        details: 'if your priority is detailed analytics from informal, mobile, or experiential learning, xAPI is the best choice.'
        type: info
        enabled: true
      -
        id: mhkkhwqh
        title: 'For modern tracking with a familiar structure:'
        details: "If you want the benefits of xAPI's detailed tracking but with a course structure similar to SCORM, cmi5 is the ideal middle ground."
        type: info
        enabled: true
      -
        id: mhkki62d
        title: 'For quick, external tool integration:'
        details: 'If you primarily need to connect third-party learning applications to your existing LMS, LTI is the right solution.'
        type: info
        enabled: true
      -
        id: mhkkip5w
        title: 'For interactive, open-source content:'
        details: 'If you want to create highly interactive HTML5 content without being tied to a specific system, H5P is a flexible and affordable option.'
        type: info
        enabled: true
    type: info_card
    enabled: true
    card_image:
      - integration/h5p.webp
  -
    id: mhkkji97
    title: 'Connect Securely and Scale Easily'
    description: "With ExamLock, you're not just securing assessments, you're future-proofing your testing environment."
    button_text: 'Book a Demo'
    type: letter_section
    enabled: true
---
