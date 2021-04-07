import { useRouter } from 'next/router'


function Detail({ data }) {
	// cek data di console
	console.log(data);

    const typesLength = data.types.length;

	return (



<div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
   
        <p className="uk-text-center">
            {data.types.map(({ type, slot }) => (
            <span>{type.name} {typesLength === slot ? "" : ' - '}</span>
            ))}
        </p>

        <h4 className="uk-text-center">
            {data.name}
        </h4>

        <h5 className="">
            {stat.name}
        </h5>

        <p className="">
            {base_stat}
        </p>


    <div className="uk-card-media-left uk-cover-container">
        <img src={data.sprites.front_default} alt="illustration"/>
    </div>

    <div>
        <div className="uk-card-body">
            <h3 className="uk-card-title">Media Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
</div>









        );
}

export async function getStaticPaths() {
	// cari detail data pokemon 
	const res     = await fetch("https://pokeapi.co/api/v2/pokemon/")
	const data    = await res.json();
    const allData = [];

	// masukkan data ke array yang baru
	let count = 0;
	for (const item of data.results) {
		const pokeUrl  = await fetch(item.url);
		const pokeData = await pokeUrl.json();
		allData[count++] = pokeData;
	}


	const paths = allData.map((pokemon) => ({
        params: { id: pokemon.id.toString() },
    }))
    
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await res.json()
  
    return { props: { data } }
  }

export default Detail