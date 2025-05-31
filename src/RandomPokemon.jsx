import './RandomPokemon.css'
export default function RandomPokemon() {

    const generatePokemon = {
        randomNum: Math.floor(Math.random() * 151) + 1,
        imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
    };

    function buttonClicked() {
        location.reload();
    }

    return (
        <div className='container'>
            <div className='headline-container'>
                <h1 className='headline'>Random Pokemon Generator</h1>
            </div>
            <h1>Pokemon #{generatePokemon.randomNum}</h1>
            <img src={`${generatePokemon.imgSrc}${generatePokemon.randomNum}.png`} alt="Pokemon" />
            <div className='button-container'>
                <button onClick={buttonClicked}>Generate New Pokemon</button>
            </div>
        </div>
    )
}