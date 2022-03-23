import TrainersList from '../components/meetups/TrainerList';


const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is Trainers name ',
    image:
      '123.jpg',
    address: '077#########',
    description:
      '      This is a dummy description ',

  },
  {
    id: 'm2',
    title: 'This is name',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: '077########',
    description:
      'This is dummy description 2',
  },
];

function AllTrainersPage() {
  return (
    <section>
      <h1>All Trainers</h1>
      <TrainersList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllTrainersPage;