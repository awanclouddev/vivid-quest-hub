import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const foodItems = [
  {
    id: 1,
    name: "Fresh Salad Bowl",
    price: "IDR 45.000",
    image: "🥗",
  },
  {
    id: 2,
    name: "Chicken Noodles",
    price: "IDR 75.000",
    image: "🍜",
  },
  {
    id: 3,
    name: "Smoothie Fruits",
    price: "IDR 45.000",
    image: "🥤",
  },
  {
    id: 4,
    name: "Hot Chicken Wings",
    price: "IDR 45.000",
    image: "🍗",
  },
];

export const FoodOrdersList = () => {
  return (
    <div className="space-y-4">
      {foodItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="text-lg">{item.image}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm">{item.name}</span>
          </div>
          <span className="text-sm text-muted-foreground">{item.price}</span>
        </div>
      ))}
    </div>
  );
};