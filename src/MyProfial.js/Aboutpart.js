import React from "react";
function about() {
  return (
    <div>
    <div className="aboutpart">
      <div >
        <h2 className="partone" style={{ fontWeight: "bold" }}>Sebastião Salgado : an Exhibition about the Fragility of Water</h2>
        <p className="partone">
          In striking black-and-white photographs, Sebastião Salgado documents
          marginalized people and majestic landscapes, sometimes uniting them in
          the same frames. He mixes formal compositional techniques with a sense
          of documentary rawness; his photographs are both dramatic in scale and
          granular in focus. Salgado earned a PhD in economics and embraced
          photography while he was working at the International Coffee
          Organization and making frequent trips to Africa. He transitioned to
          freelance photojournalism and eventually joined the international
          photo cooperative Magnum, adopting the documentary styles of the
          organization’s founders Robert Capa and Henri Cartier-Bresson. Salgado
          has exhibited at institutions including the International Center of
          Photography, the Natural History Museum in London, the Barbican
          Gallery, the Deutsches Historisches Museum, and the George Eastman
          Museum. His work is held in the collections of the Centre Pompidou,
          the Art Institute of Chicago, the Museum of Modern Art, the J. Paul
          Getty Museum, and the National Museum of Modern Art in Tokyo, among
          others. In 1985, Salgado was a finalist for the Pulitzer Prize in
          Feature Photography.
        </p>
      </div>
      <div>
        <img src="img/Erg Ubari.jpg" alt="ErgUbari" width={600}/>
        <h6>Erg Ubari, Ramla d’El Daouda, Libya, 2009</h6>
      </div>
    </div>
    { <div>
     <h2 className="tribute" style={{ fontWeight: "bold" }}> Tribute to Sebastiao Salgado</h2>
      </div> }
    </div>
  );
}
export default about;
