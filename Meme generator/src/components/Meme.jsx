import { useState, useEffect } from 'react'
import memesData from "../data/memesData"


function Meme () {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    
    const [allMemes, setAllMemes] = useState([])

    // get image from api and set state to the data
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    
    function getMemeImage () {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomIndex].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <section>
                <label>
                    <input 
                        type="text" 
                        placeholder="Top text"
                        name='topText'
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        name='bottomText'
                        onChange={handleChange}
                    />
                </label>
                <button 
                    onClick={getMemeImage} 
                    type="submit"
                >
                    Get a new meme image 🖼
                </button>
            </section>

            <div className='meme'>
                <img src={meme.randomImage}/>
                <h2 className='top meme-text'>{meme.topText}</h2>
                <h2 className='bottom meme-text'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme