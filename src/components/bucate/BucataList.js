import CosItem from "./CosItem.js";
import Card from "./Card.js";
const BUCATE = [
  {
    id: "m1",
    name: "Brânză franceză",
    description:
      "Un sortiment de diferite tipuri de brânză franceză, cum ar fi camembert, brie, roquefort și altele. Se servește cu baghetă crocantă, struguri și nuci.",
    price: 14.99,
  },
  {
    id: "m2",
    name: "Salată grecească",
    description:
      "O salată proaspătă și suculentă din roșii, castraveți, ardei dulci, brânză feta, măsline și oregano. Se stropește cu ulei de măsline și oțet balsamic.",
    price: 10.0,
  },
  {
    id: "m3",
    name: "Supă de tom yam",
    description:
      "O supă picantă și aromată din Thailanda, preparată cu creveți, ciuperci, lămâie, iarbă de lămâie, ghimbir și lapte de cocos. Se servește cu orez sau tăiței.",
    price: 12.0,
  },
  {
    id: "m4",
    name: "Taco mexicane",
    description:
      "Tortilla de porumb umplută cu carne tocată, fasole roșie, brânză rasă, salată verde, roșii și sos salsa. Se servește cu guacamole și smântână.",
    price: 7.99,
  },
  {
    id: "m5",
    name: "Tiramisu",
    description:
      "Un desert italian delicios, preparat cu pișcoturi înmuiate în cafea și lichior, cremă de mascarpone și cacao pudră. Se răcește în frigider până se întărește.",
    price: 5.99,
  },
];

const BucataList = () => {
  const bucate = BUCATE.map((bucate) => (
    <CosItem
      id={bucate.id}
      key={bucate.id}
      name={bucate.name}
      price={bucate.price}
      summary={bucate.description}
    />
  ));
  return (
    <Card>
      <ul>{bucate}</ul>
    </Card>
  );
};

export default BucataList;
