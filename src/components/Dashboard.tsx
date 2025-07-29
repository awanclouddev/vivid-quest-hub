import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "./MetricCard";
import { RevenueChart } from "./charts/RevenueChart";
import { OrderTimeChart } from "./charts/OrderTimeChart";
import { RatingChart } from "./charts/RatingChart";
import { OrderTrendChart } from "./charts/OrderTrendChart";
import { FoodOrdersList } from "./FoodOrdersList";

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue Card */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Revenue
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                View Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">IDR 7.852.000</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-success">↗ 2.1%</span>
                <span className="text-sm text-muted-foreground">vs last week</span>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Sales from 1-12 Dec, 2020
              </div>
              <RevenueChart />
            </CardContent>
          </Card>
        </div>

        {/* Order Time Card */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Order Time
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                View Report
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4">
                From 1-6 Dec, 2020
              </div>
              <OrderTimeChart />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Your Rating */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Your Rating</CardTitle>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </CardHeader>
          <CardContent>
            <RatingChart />
          </CardContent>
        </Card>

        {/* Most Ordered Food */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Most Ordered Food</CardTitle>
            <p className="text-sm text-muted-foreground">
              Adipiscing elit, sed do eiusmod tempor
            </p>
          </CardHeader>
          <CardContent>
            <FoodOrdersList />
          </CardContent>
        </Card>

        {/* Order */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-lg font-semibold">Order</CardTitle>
              <div className="text-3xl font-bold text-foreground mt-2">2.568</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-destructive">↘ 2.1%</span>
                <span className="text-sm text-muted-foreground">vs last week</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Sales from 1-6 Dec, 2020
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              View Report
            </Button>
          </CardHeader>
          <CardContent>
            <OrderTrendChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};