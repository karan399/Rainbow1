document.addEventListener('DOMContentLoaded', function() {
    const emailParagraph = document.getElementById('emailParagraph');
  
    emailParagraph.addEventListener('click', function() {
      const email = 'rainbowenterprises1963@gmail.com';
      
  
      // Construct the mailto link
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  
      // Create an anchor element and set its href attribute to the mailto link
      const linkElement = document.createElement('a');
      linkElement.href = mailtoLink;
  
      // Append the anchor element to the body and trigger a click event
      document.body.appendChild(linkElement);
      linkElement.click();
  
      // Remove the anchor element from the body
      document.body.removeChild(linkElement);
    });
  });
  