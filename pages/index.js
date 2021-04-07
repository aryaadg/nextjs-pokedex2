import Image from "next/image";
import Link from 'next/link'
import Nav from '@components/navbar'


    function IndexPage({ allData }) {
        // cek data di console
        console.log(allData);

	return (
    <>

    <a className="uk-padding uk-navbar-item uk-logo" href="" > <img src="pokemon.png" width="300px" height="300px"/></a>
        
    <Nav></Nav>

        <h1 className="uk-text-center">List Pokemon</h1>

		<div className=" uk-child-width-1-3@m uk-text-center" uk-grid="true">
						{/* Looping untuk menampilkan data pokemon */}
						{allData.map(({ id, name, sprites, types }) => (
			<div key={name}>

                <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <Link href={"/detail/" + id}>
                            <a><img src={sprites.front_default} width="80%" /> </a>
                            </Link>
                        </div>

            <div className="uk-card-body">
                <Link href={"/detail/" + id}>
                <a> <h3 className="uk-card-title uk-text-capitalize">{name}</h3> </a>
                </Link>
                <p className="uk-text-capitalize"> {types[0].type.name} </p>
            </div>
        </div>
							
	</div>
	))}
	</div>













{/* bawah jgn hapuss */}
    </>
	);
}


export async function getStaticProps() {
	// cari 8 data pokemon 
	const res  = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=9')
	const data = await res.json();
	const allData = [];

	// masukkan data ke array yang baru
	let count = 0;
	for (const item of data.results) {
		const pokeUrl  = await fetch(item.url);
		const pokeData = await pokeUrl.json();
		allData[count++] = pokeData;
	}
  
	// pass data ke IndexPage
	return {
		props: {
			allData,
		},
	}
}

export default IndexPage