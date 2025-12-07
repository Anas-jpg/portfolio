
const Lights = () => {
    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight
                position={[2, 5, 2]}
                intensity={2}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <spotLight
                position={[-5, 5, -5]}
                intensity={2}
                angle={0.3}
            />
        </>
    );
};

export default Lights;
