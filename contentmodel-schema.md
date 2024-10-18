Content model for Jacob Tarr Photography

Header
- Logo image and logo text
- Links (linked from pages About, Portfolio, Blog, Contact)
- No need for content model for these:
  - Light/dark mode - light mode appeared first
  - Instagram logo/link

Homepage
  - Main Hero - 4 images based on design (max)
    - Images include
      - First image - 611x260 (width times length) image
      - Second image - 375x700
      - Third image - 374x340
      - Fourth image - 374x340
    - Images should pull from photo post type (featured image of this post type)
    - Title (always Jacob Tarr then new line Photography, so "Jacob Tarr Photography")
    - Tagline, tagline will read Traveling around and capturing the beauty of the Southwest. Ideally should be rich text editor. Limit to that amount of characters if possible, just me editing really)
  - Featured Masonry block, can be on any page
    - Title
    - Content (text, paragraph, rich text editor)
    - Button/Link (have ability to link to page)
    - 6 images
      - First image - 354x157
      - Second image - 533x534
      - Third image - 295x257
      - Fourth image - 295x257
      - Fifth image - 611x305
      - Sixth image - 611x305
    - this is obviously essentially a masonry using a custom layout i designed in figma
    - these images should also be relational fields too, pulling from photo post type (featured image of this post type)
  - Slider block
    - want this to be on any page i think
    - Title
    - button/link (have ability to link to page)
    - max 8 images (in design have this set to 454x454 so square but this image like the rest of them elsewhere should account for 4k monitors and retina displays)
      - slides should be relation fields, pulling from photo post type (featured image)
      - slides should pull in from photo's fields:
        - Title
        - Location
  - Two column block layout - can be on any page
    - Image left or right column
    - Content left or right column
      - Title
      - Content (text, paragraph, rich text editor)
      - Button/Link (have ability to link to page)
    - Two options
      - full width
      - Condensed width

Photo Post Type (each photo has its own page)
  - Featured Image
  - Taxonomies
    - State
      - Arizona
      - Colorado
      - New Mexico
      - Utah
      - Nevada
      - will probably add one or two down the road but i mainly stay in southwest
    - Location
    - Date Taken
    - Season
      - Spring
      - Summer
      - Fall
      - Winter
    - Genre
      - Landscape
      - Wildlife
    - might add more but good for now
  - Content (rich text editor, plan on writing a paragraph or two for content)

Portfolio page
- custom page so maybe not content model for this?
- title (Portfolio)
- Sidebar with filters:
   - State (radio buttons)
    - All (checked by default)
    - Arizona
    - Colorado
    - New Mexico
    - Utah
    - Nevada
  - Season (all checkbox)
    - Spring
    - Summer
    - Fall
    - Winter
  - Genre (all checkbox)
    - Landscape
    - Wildlife
  - Right beside Filter title (above actually filters) I plan to have Reset Filters option
- Grid of photos (three columns)
  - plan to have every photo here. Every 15 images user can choose to "Load More"
  - above this grid I have a Sort by function with following options
    - Featured - default, just how I have them in CMS
    - Newest - sort by latest added in cms
    - Oldest - sort by oldest added in cms
    - Date Taken - sort by date taken taxonomy field, with newest ones that were taken appear first


About page
  - Gallery with 3 images
    - option to add up to three images, first image will be bigger so itll be featured first
    - also want to add caption to this gallery
  - Page content (about me)
  - Unlimited page sections
    - Option to add title
    - Option to add content
    - Option to add as many buttons with links in a row (repeated field)
    - option to add callout box
      - each callout box can have as many section:
        - title
        - rich content
      - these sections can be moved around at will
    - each of these page sections can be moved around at free will

Contact page
- rich content
- form with full name, email, subject and message

Blog page
- eventually blog page but im still working this through. still want to create post post type for now though