// Contact will own form values and field errors as two objects in Part 4.
// For Parts 1–3, keep the reference form behavior.
function Contact() {
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  const showError = (input, message) => {
    clearError(input)
    const errorElement = document.createElement('span')
    errorElement.className = 'error-message'
    errorElement.textContent = message
    input.classList.add('error')
    input.classList.remove('success')
    input.parentElement.appendChild(errorElement)
  }
  
  const clearError = (input) => {
    const existingError = input.parentElement.querySelector('.error-message')
    if (existingError) {
      existingError.remove()
    }
    input.classList.remove('error')
  }
  
  const showSuccess = (input) => {
    clearError(input)
    input.classList.add('success')
    input.classList.remove('error')
  }
  
  // Real-time validation handlers
  const handleNameChange = (e) => {
    const value = e.target.value.trim()
    const input = e.target
    
    if (value.length === 0) {
      showError(input, 'Name is required')
    } else if (value.length < 2) {
      showError(input, 'Name must be at least 2 characters')
    } else {
      showSuccess(input)
    }
  }
  
  const handleEmailChange = (e) => {
    const value = e.target.value.trim()
    const input = e.target
    
    if (value.length === 0) {
      showError(input, 'Email is required')
    } else if (!isValidEmail(value)) {
      showError(input, 'Please enter a valid email address')
    } else {
      showSuccess(input)
    }
  }
  
  const handleMessageChange = (e) => {
    const value = e.target.value.trim()
    const input = e.target
    
    if (value.length === 0) {
      showError(input, 'Message is required')
    } else if (value.length < 10) {
      showError(input, 'Message must be at least 10 characters')
    } else {
      showSuccess(input)
    }
  }
  
  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const messageInput = document.querySelector('#message')
    
    let isValid = true
    const formData = {}
    
    // Validate name
    const nameValue = nameInput.value.trim()
    if (nameValue.length < 2) {
      showError(nameInput, 'Name must be at least 2 characters')
      isValid = false
    } else {
      formData.name = nameValue
    }
    
    // Validate email
    const emailValue = emailInput.value.trim()
    if (!isValidEmail(emailValue)) {
      showError(emailInput, 'Please enter a valid email address')
      isValid = false
    } else {
      formData.email = emailValue
    }
    
    // Validate message
    const messageValue = messageInput.value.trim()
    if (messageValue.length < 10) {
      showError(messageInput, 'Message must be at least 10 characters')
      isValid = false
    } else {
      formData.message = messageValue
    }
    
    // If all valid, show success
    if (isValid) {
      const form = e.target
      const existingSuccess = form.querySelector('.success-message')
      if (existingSuccess) {
        existingSuccess.remove()
      }
      
      const successMessage = document.createElement('div')
      successMessage.className = 'success-message'
      successMessage.textContent = 'Thank you! Your message has been sent successfully.'
      form.appendChild(successMessage)
      
      console.log('Form submitted with data:', formData)
      
      // Clear form after 3 seconds
      setTimeout(() => {
        form.reset()
        successMessage.remove()
        document.querySelectorAll('.form-group input.success, .form-group textarea.success').forEach(input => {
          input.classList.remove('success')
        })
      }, 3000)
    }
  }
  return (
<section id="contact" className="section section-alt">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>

            <form id="contact-form" className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    onChange={handleNameChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    onChange={handleEmailChange}
                  />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required
                    onChange={handleMessageChange}
                  ></textarea>
                </div>

                <div className="form-group form-group-full">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact
