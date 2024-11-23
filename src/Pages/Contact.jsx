import { useState } from "react"

export const Contact = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    })

    const handleInputForm = (e) => {
        const { name,  value } = e.target
        setFormData((prev) => ({
            ...prev, 
            [name]:value
        }))
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormData({
            username: "",
            email: "",
            message: "",
        })
        console.log(formData);
        
        // const inputData = Object.fromEntries(formData.enteries())
        // console.log(inputData);
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="container contact-wrapper">
                <form action="" onSubmit={handleFormSubmit}>
                    <input type="text" name="username" id="username" placeholder="enter your name" value={formData.username} onChange={handleInputForm} autoComplete="false" className="form-control" required  />
                    <input type="email" name="email" id="email" placeholder="enter your email" value={formData.email} onChange={handleInputForm} autoComplete="false" className="form-control" required  />
                    <textarea rows={10} name="message" id="message" placeholder="enter your message" value={formData.message} onChange={handleInputForm} autoComplete="false" className="form-control" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}