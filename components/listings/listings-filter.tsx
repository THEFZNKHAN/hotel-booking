"use client";

import { useState } from "react";
import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function ListingsFilter() {
    const [price, setPrice] = useState([0, 1000]);
    const [type, setType] = useState<string>("");
    const [rating, setRating] = useState<string>("");

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Filter Listings</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Type</label>
                        <Select value={type} onValueChange={setType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="HOTEL">Hotel</SelectItem>
                                <SelectItem value="RESTAURANT">
                                    Restaurant
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Price Range
                        </label>
                        <Slider
                            value={price}
                            onValueChange={setPrice}
                            max={1000}
                            step={10}
                            className="mt-2"
                        />
                        <div className="flex items-center justify-between">
                            <span className="text-sm">${price[0]}</span>
                            <span className="text-sm">${price[1]}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Rating</label>
                        <Select value={rating} onValueChange={setRating}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select rating" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="4">4+ Stars</SelectItem>
                                <SelectItem value="3">3+ Stars</SelectItem>
                                <SelectItem value="2">2+ Stars</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
