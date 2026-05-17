import { useState } from 'react'

const Contact = () => {
    const [phone, setPhone] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        alert(`Name: ${name} Email: ${email}, Phone: ${phone}`)
    }


    return (
        <div className='form' onSubmit={handleSubmit}>
            <form action="">
                Name: <input id='name' onChange={(e) => { setName(e.target.value) }} value={name} name='name' type="text" />
                Email: <input id='email' onChange={(e) => { setEmail(e.target.value) }} value={email} name='email' type="text" />
                Phone: <input id='phone' onChange={(e) => { setPhone(e.target.value) }} value={phone} name='phone' type="text" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact