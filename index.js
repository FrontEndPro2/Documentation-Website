function intro() {
    let intro = '<h1>Introduction</h1><p>HTML, short for Hypertext Markup Language, is the foundational language of the World Wide Web. It is a markup language used to structure the content of web pages, enabling them to be displayed and interacted with on various devices and browsers. HTML utilizes tags to define elements such as headings, paragraphs, images, links, tables, forms, and more, organizing information into a logical and hierarchical structure. It acts as the backbone of web development, providing a standardized way to create and present content on the internet. By combining HTML with CSS (Cascading Style Sheets) and JavaScript, developers can bring their web pages to life, adding style, interactivity, and functionality to create immersive and dynamic online experiences. Understanding HTML is essential for anyone interested in web development, as it forms the core of the modern web and serves as a fundamental building block for constructing engaging and accessible websites.</p>';
    return document.getElementById('content').innerHTML = intro;
    
}
function types() {
    let types = ' <h1>Types</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic officiis quas harum assumenda rerum voluptatem obcaecati dolorem sed quisquam.</p>'
    return document.getElementById('content').innerHTML = types;
    
}

function htmltags() {
    let taglist = ` <h1>All important tags of HTML</h1> 
    
    <li><strong>&lt;html&gt;</strong>: Defines the root element of an HTML page.</li>
    <li><strong>&lt;head&gt;</strong>: Contains metadata and other header elements such as title, style, and script tags.</li>
    <li><strong>&lt;title&gt;</strong>: Sets the title of the HTML document that appears in the browser's title bar or tab.</li>
    <li><strong>&lt;body&gt;</strong>: Represents the main content of an HTML document.</li>
    <li><strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Defines headings of different levels, with &lt;h1&gt; being the highest and &lt;h6&gt; the lowest.</li>
    <li><strong>&lt;p&gt;</strong>: Defines a paragraph of text.</li>
    <li><strong>&lt;a&gt;</strong>: Creates a hyperlink to another web page, file, or a specific location within the same page.</li>
    <li><strong>&lt;img&gt;</strong>: Inserts an image into the web page.</li>
    <li><strong>&lt;ul&gt;</strong>: Represents an unordered list, typically rendered with bullet points.</li>
    <li><strong>&lt;ol&gt;</strong>: Represents an ordered list, typically rendered with numbers or letters.</li>
    <li><strong>&lt;li&gt;</strong>: Defines a list item within &lt;ul&gt; or &lt;ol&gt;.</li>
    <li><strong>&lt;div&gt;</strong>: A generic container that divides the HTML document into sections or groups.</li>
    <li><strong>&lt;span&gt;</strong>: Used to apply styles or manipulate specific portions of text within a larger element.</li>
    <li><strong>&lt;table&gt;</strong>: Creates a table with rows and columns.</li>
    <li><strong>&lt;tr&gt;</strong>: Defines a table row.</li>
    <li><strong>&lt;td&gt;</strong>: Defines a table cell.</li>
    <li><strong>&lt;th&gt;</strong>: Defines a table header cell.</li>
    <li><strong>&lt;form&gt;</strong>: Creates a form to collect user input.</li>
    <li><strong>&lt;input&gt;</strong>: Generates an input field, such as a text box or checkbox, within a form.</li>
    <li><strong>&lt;button&gt;</strong>: Creates a clickable button.</li>
    <li><strong>&lt;textarea&gt;</strong>: Defines a multiline text input area.</li>
    <li><strong>&lt;select&gt;</strong>: Creates a dropdown list.</li>
    <li><strong>&lt;option&gt;</strong>: Defines an option within a dropdown list.</li>
    <li><strong>&lt;label&gt;</strong>: Associates a label with a form element.</li>
    <li><strong>&lt;header&gt;</strong>: Represents a container for introductory content or a group of navigational links.</li>
    <li><strong>&lt;nav&gt;</strong>: Defines a section containing navigation links.</li>
    <li><strong>&lt;footer&gt;</strong>: Represents a footer for a document or a section.</li>
    <li><strong>&lt;section&gt;</strong>: Represents a standalone section within a document.</li>
    <li><strong>&lt;article&gt;</strong>: Defines an independent, self-contained piece of content.</li>
    <li><strong>&lt;aside&gt;</strong>: Represents content that is tangentially related to the main content.</li>
    
       `
    return document.getElementById('content').innerHTML = taglist;

    
}
function imgtag() {
    let imgtag=` <h1><strong>&lt;img&gt;</strong> Tag in HTML</h1>
    <p>The HTML <strong>&lt;img&gt;</strong> tag is used to insert an image into a web page. It is a self-closing tag, meaning it doesn't require a closing tag.</p>
    <p>The <strong>&lt;img&gt;</strong> tag has several attributes that allow you to specify the source of the image, its display properties, alternative text, and more. Here's a detailed explanation of the important attributes:</p>
    
    <ul>
      <li><strong>src</strong>: This attribute specifies the URL or file path of the image. It is required and must be set to the location of the image you want to display.</li>
      <li><strong>alt</strong>: The <strong>alt</strong> attribute provides alternative text for the image. It is important for accessibility purposes and should describe the image in case it cannot be displayed.</li>
      <li><strong>width</strong> and <strong>height</strong>: These attributes allow you to specify the dimensions of the image in pixels. They control the display size of the image on the web page.</li>
      <li><strong>title</strong>: The <strong>title</strong> attribute provides additional information about the image. It can be displayed as a tooltip when the user hovers over the image.</li>
      <li><strong>align</strong>: The <strong>align</strong> attribute specifies the horizontal alignment of the image within its surrounding content. (Deprecated in HTML5)</li>
      <li><strong>border</strong>: The <strong>border</strong> attribute specifies the width of a border around the image. (Deprecated in HTML5)</li>
      <li><strong>loading</strong>: The <strong>loading</strong> attribute allows you to control the image loading behavior.</li>
    </ul> `
    return document.getElementById('content').innerHTML = imgtag;
    
}
function Anchortag() {
    let anchortag=`<h1>The HTML <strong>&lt;a&gt;</strong> Tag: Creating Hyperlinks</h1>
    <p>The <strong>&lt;a&gt;</strong> tag in HTML, also known as the anchor tag, is one of the most important and widely used elements for creating hyperlinks. It allows you to link web pages, sections within a page, email addresses, files, and more. The <strong>&lt;a&gt;</strong> tag provides a way to navigate between different resources on the web and within a website. Let's explore the anchor tag and its key attributes and usage.</p>
  
    <h2>Basic Syntax</h2>
    <p>The basic syntax of the <strong>&lt;a&gt;</strong> tag is as follows:</p>
    <pre>&lt;a href="URL"&gt;Link Text&lt;/a&gt;</pre>
    <ul>
      <li>The <code>href</code> attribute specifies the destination or URL (Uniform Resource Locator) where the link should point to.</li>
      <li>The link text between the opening and closing <strong>&lt;a&gt;</strong> tags is what the user sees and clicks on.</li>
    </ul>
  
    <h2>Creating Hyperlinks</h2>
    <h3>Absolute URLs</h3>
    <p>To link to an external resource with an absolute URL, you can use the following syntax:</p>
    <pre>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</pre>
  
    <h3>Relative URLs</h3>
    <p>Relative URLs are used to link to internal pages or resources within a website. They are relative to the current page's URL or file path.</p>
    <pre>&lt;a href="/about.html"&gt;About&lt;/a&gt;</pre>
    <pre>&lt;a href="../contact.html"&gt;Contact&lt;/a&gt;</pre>
  
    <h3>Anchor Links (Internal Page Links)</h3>
    <p>Anchor links allow you to link to specific sections within a web page using the <code>id</code> attribute.</p>
    <pre>&lt;h2 id="section1"&gt;Section 1&lt;/h2&gt;</pre>
    <pre>&lt;a href="#section1"&gt;Go to Section 1&lt;/a&gt;</pre>
  
    <h2>Additional Attributes</h2>
    <ul>
      <li><code>target</code>: Specifies where the linked content should open.</li>
      <li><code>rel</code>: Indicates the relationship between the current document and the linked document.</li>
      <li><code>title</code>: Provides additional information about the link.</li>
      <li><code>download</code>: Forces the linked resource to be downloaded when clicked.</li>
    </ul>
  
    <h2>Styling and Behavior</h2>
    <p>The appearance and behavior of anchor tags can be customized using CSS. You can define styles for different link states:</p>
    <pre>a:link { color: blue; }</pre>

    <pre>a:visited { color: purple; }</pre>
    <pre>a:hover { text-decoration: underline; }</pre>
    <pre>a:active { color: red; }</pre>
    <h2>Accessibility Considerations</h2>
    <p>To ensure accessibility, it is crucial to provide descriptive and meaningful link text. This helps users understand the purpose of the link even without visual context. Additionally, using the <code>alt</code> attribute with alternative text for images used as links is important for users who rely on screen readers or have images disabled.</p>
    <h2>Conclusion</h2>
    <p>The HTML <strong>&lt;a&gt;</strong> tag is a fundamental element for creating hyperlinks in web pages. It allows users to navigate between different resources on the web and within a website. By utilizing the various attributes and techniques discussed, you can create effective and accessible links that enhance the user experience.</p>`
    return document.getElementById('content').innerHTML =  anchortag;
    
}
function listss() {
    let hlist=`<h1>HTML Lists: Organizing Content in a Structured Manner</h1>

    <h2>Ordered Lists (<code>&lt;ol&gt;</code>)</h2>
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>
  
    <h2>Unordered Lists (<code>&lt;ul&gt;</code>)</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  
    <h2>Nested Lists</h2>
    <ol>
      <li>First item</li>
      <li>Second item
        <ul>
          <li>Nested item 1</li>
          <li>Nested item 2</li>
        </ul>
      </li>
      <li>Third item</li>
    </ol>
  
    <h2>Definition Lists (<code>&lt;dl&gt;</code>)</h2>
    <dl>
      <dt>Term 1</dt>
      <dd>Definition 1</dd>
      <dt>Term 2</dt>
      <dd>Definition 2</dd>
    </dl>
  
    <h2>Styling Lists with CSS</h2>
    <p>You can style lists using CSS to customize their appearance.</p>
  
    <h2>Accessibility Considerations</h2>
    <p>When using lists, it's important to consider accessibility. Provide clear and concise text for each list item to ensure understanding for all users, including those who rely on screen readers. Additionally, use proper semantic tags (<code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;dt&gt;</code>, <code>&lt;dd&gt;</code>) to structure your lists, which helps assistive technologies interpret and understand the content.</p>`
    return document.getElementById('content').innerHTML = hlist;
}
function divs() {
    let divss=`<h1>HTML &lt;div&gt;: The Versatile Container for Structuring Web Content</h1>

    <p>In HTML, the <strong>&lt;div&gt;</strong> element is a fundamental component used to create containers that organize and structure web content.</p>
  
    <h2>Basic Syntax</h2>
    <pre>
      &lt;div&gt;
        <!-- Content goes here -->
      &lt;/div&gt;
    </pre>
  
    <p>The opening <strong>&lt;div&gt;</strong> tag represents the start of the container, while the closing <strong>&lt;/div&gt;</strong> tag marks its end. Any content placed between these tags will be contained within the <strong>&lt;div&gt;</strong> element.</p>
  
    <h2>Grouping and Organizing Content</h2>
    <p>One of the primary purposes of the <strong>&lt;div&gt;</strong> element is to group related elements together.</p>
  
    <h2>Applying Styles with CSS</h2>
    <pre>
      &lt;div class="container"&gt;
        <!-- Content goes here -->
      &lt;/div&gt;
    </pre>
    <pre>
      .container {
        background-color: #f2f2f2;
        padding: 10px;
        border: 1px solid #ccc;
      }
    </pre>
  
    <h2>Creating Layouts</h2>
    <pre>
      &lt;div class="row"&gt;
        &lt;div class="column"&gt;
          <!-- Content for the left column -->
        &lt;/div&gt;
        &lt;div class="column"&gt;
          <!-- Content for the right column -->
        &lt;/div&gt;
      &lt;/div&gt;
    </pre>
    <pre>
      .row {
        display: flex;
      }
      .column {
        flex: 1;
        padding: 10px;
      }
    </pre>
  
    <h2>JavaScript Manipulation</h2>
    <p>The <strong>&lt;div&gt;</strong> element also serves as a target for JavaScript manipulation.</p>
  `
    return document.getElementById('content').innerHTML = divss;
}
function hform() {
    let formss=`<h1>HTML Forms: Capturing User Input and Interactivity</h1>

    <p>HTML forms are a powerful tool for creating interactive web pages that capture user input.</p>
  
    <h2>Basic Form Structure</h2>
    <pre>
      &lt;form&gt;
        <!-- Form elements go here -->
      &lt;/form&gt;
    </pre>
  
    <p>The <strong>&lt;form&gt;</strong> element acts as a container for various form elements.</p>
  
    <h2>Input Fields</h2>
    <pre>
      &lt;input type="text" name="username" placeholder="Enter your username"&gt;
    </pre>
  
    <p>The <strong>&lt;input&gt;</strong> element creates an input field, and the <strong>type</strong> attribute specifies the type of input field.</p>
  
    <h2>Submitting the Form</h2>
    <pre>
      &lt;input type="submit" value="Submit"&gt;
    </pre>
  
    <p>The <strong>&lt;input&gt;</strong> element with type <strong>"submit"</strong> is used to submit the form.</p>
  
    <h2>Form Validation</h2>
    <pre>
      &lt;input type="text" name="email" required&gt;
    </pre>
  
    <p>The <strong>required</strong> attribute makes the input field mandatory.</p>
  
    <h2>Styling and Layout</h2>
    <p>You can apply CSS styles to form elements to customize their appearance and layout.</p>
  
    <h2>Handling Form Submissions with Server-side Scripting</h2>
    <p>When a form is submitted, the data is processed by a server-side script.</p>
  
    <h2>Conclusion</h2>
    <p>HTML forms provide a powerful means of capturing user input and facilitating interaction on web pages.</p>
  
  `
    return document.getElementById('content').innerHTML = formss;
}
function btns() {
    let btn=`<h1>HTML Buttons: Enhancing Interactivity and User Experience</h1>

    <p>HTML buttons are essential elements for enhancing interactivity and user experience on web pages.</p>
  
    <h2>Creating a Button</h2>
    <pre>
      &lt;button&gt;Click me&lt;/button&gt;
    </pre>
  
    <p>The <strong>&lt;button&gt;</strong> element creates a button on the web page.</p>
  
    <h2>Button Types</h2>
    <pre>
      &lt;button type="button"&gt;Click me&lt;/button&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
      &lt;button type="reset"&gt;Reset&lt;/button&gt;
    </pre>
  
    <p>The <strong>type</strong> attribute specifies the behavior of the button. The <strong>type="button"</strong> is the default type. The <strong>type="submit"</strong> submits the form, and the <strong>type="reset"</strong> resets form fields.</p>
  
    <h2>Button Styling</h2>
    <p>You can apply CSS styles to buttons to customize their appearance.</p>
  
    <h2>Button with Icons</h2>
    <pre>
      &lt;button&gt;
        &lt;i class="fa fa-heart"&gt;&lt;/i&gt; Like
      &lt;/button&gt;
    </pre>
  
    <p>You can add icons to buttons by using font icons or SVG icons within the button element.</p>
  
    <h2>Button Events</h2>
    <pre>
      &lt;button onclick="myFunction()"&gt;Click me&lt;/button&gt;
      <script>
        function myFunction() {
          alert("Button clicked!");
        }
      </script>
    </pre>
  
    <p>Buttons can trigger JavaScript functions when clicked by using the <strong>onclick</strong> event.</p>
  
    <h2>Conclusion</h2>
    <p>HTML buttons are powerful elements that enhance interactivity and user experience on web pages.</p>`
    return document.getElementById('content').innerHTML = btn;
}
function history() {
    let history=` <h1>The History of HTML: From its Inception to the Modern Web</h1>

    <p>HTML, which stands for <strong>HyperText Markup Language</strong>, is the standard markup language for creating web pages and applications. It has a rich history that spans several decades, evolving alongside the growth of the World Wide Web.</p>
  
    <h2>Early Days: HTML 1.0 and 2.0</h2>
    <p>The first version of HTML, <strong>HTML 1.0</strong>, was introduced in 1991 by Tim Berners-Lee. It provided a simple markup language to create basic web pages. HTML 2.0 followed shortly in 1995, introducing features like tables, image maps, and form elements.</p>
  
    <h2>Standardization and Advancements: HTML 3.2 and 4.01</h2>
    <p><strong>HTML 3.2</strong>, released in 1997, standardized many features that were previously implemented differently across various web browsers. It introduced new elements like <strong>&lt;div&gt;</strong> and <strong>&lt;span&gt;</strong>, and enhanced support for tables and forms. HTML 4.01, released in 1999, refined the language further and introduced semantic elements like headings, emphasized text, and strong text.</p>
  
    <h2>XHTML: Combining HTML and XML</h2>
    <p><strong>XHTML</strong> (Extensible HTML) emerged in 2000 as an effort to bridge the gap between HTML and XML. It combined the syntax of HTML with the stricter rules of XML, promoting cleaner and more well-formed code.</p>
  
    <h2>HTML5: The Modern Web Standard</h2>
    <p>The latest major revision, <strong>HTML5</strong>, was introduced in 2014. It brought significant advancements to web development, introducing new semantic elements, native support for audio and video, improved form controls, and the ability to create interactive web applications using JavaScript and APIs.</p>
  
    <h2>Continued Evolution</h2>
    <p>HTML5 continues to evolve with subsequent versions like HTML5.1 and HTML5.2, bringing further enhancements and refinements to the language. Ongoing efforts by the World Wide Web Consortium (W3C) and the HTML working group ensure the standardization and development of HTML to meet the needs of the modern web.</p>
  
    <h2>Conclusion</h2>
    <p>The history of HTML showcases its evolution from a simple markup language to a powerful tool for creating web pages and applications. HTML has adapted to the changing web landscape, providing developers with new features and capabilities to create engaging and interactive experiences.</p>`
    return document.getElementById('content').innerHTML = history;
}