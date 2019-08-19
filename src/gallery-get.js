import BlackMirror from "./Black Mirror.jpg";
import BreakingBad from "./Breaking Bad.jpg";
import Deathnote from "./Deathnote.jpg";
import Fearthewalkingdead from "./Fear the walking the dead.jpg";
import GOT from "./GOT.jpg";
import thewire from "./The wire.jpg";

 function getGallery() {
  return [
    { id: "blackmirror", name: "BlackMirror", cover: BlackMirror },
    { id: "breakingBad", name: "BreakingBad", cover: BreakingBad },
    { id: "deathnote", name: "Deathnote", cover: Deathnote },
    { id: "fear the walking dead", name: "Fearthewalkingdead", cover: Fearthewalkingdead },
    { id: "GOT", name: "GOT", cover: GOT },
    { id: "the wire", name: "Thewire", cover: thewire }
  ];
}

export default getGallery;
