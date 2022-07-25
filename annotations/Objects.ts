const profile = {
  name: "alex",
  age: 20,
  coorsd: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { name, age }: { name: string; age: string } = profile;
const { age }: { age: number } = profile;
const {
  coorsd: { lat, lng },
}: { coorsd: { lat: number; lng: number } } = profile;
