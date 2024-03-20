//rafce atajo para crear componentes mas rapida

// import looker from "../images/looker.jpg"

const Home = () => {

    return (

        <div>
            <h1 style={{ color: "green" }}>Home</h1>
            <h2>Welcome</h2>
            {/* una forma de cargar img desde carp public*/}
            {/* <img src="/public/looker.jpg" alt="" /> */}

            {/* URL Externas */}
            <img src="https://res.cloudinary.com/dmbqywcuq/image/upload/v1710940122/natavcr9qexpyqcuumdv.jpg" alt="" />

            {/* otra forma de cargar img desde la carpeta images */}
            {/* <img src={looker} alt="" /> */}
        </div>
    );
};

export default Home;
