"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { createBooking, getUnits } from "@/lib/api";
import { toast } from "sonner";

const bookingSchema = z.object({
    unitId: z.string(),
    bookingDate: z.date(),
});

export function BookingForm({
    listingId,
    units,
}: {
    listingId: string;
    units: { id: string; name: string; price: number }[];
}) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof bookingSchema>>({
        resolver: zodResolver(bookingSchema),
    });

    async function onSubmit(data: z.infer<typeof bookingSchema>) {
        setIsLoading(true);

        try {
            await createBooking({
                listingId,
                unitId: data.unitId,
                bookingDate: data.bookingDate.toISOString(),
                status: "PENDING",
            });

            toast.success("Your booking has been created");

            router.push("/dashboard/bookings");
        } catch {
            toast.error("Failed to create booking");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="unitId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Unit Type</FormLabel>
                            <Select
                                disabled={isLoading}
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a unit type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {units.map((unit) => (
                                        <SelectItem
                                            key={unit.id}
                                            value={unit.id}
                                        >
                                            {unit.name} - ${unit.price}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="bookingDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < new Date() ||
                                            date > new Date(2025, 10, 1)
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating booking..." : "Book Now"}
                </Button>
            </form>
        </Form>
    );
}

export default function Page() {
    const [units, setUnits] = useState<
        { id: string; name: string; price: number }[]
    >([]);
    const listingId = "some-listing-id";

    useEffect(() => {
        async function fetchUnits() {
            try {
                const units = await getUnits(listingId);
                setUnits(units);
            } catch (error) {
                console.error("Failed to fetch units", error);
            }
        }

        fetchUnits();
    }, [listingId]);

    return <BookingForm listingId={listingId} units={units} />;
}
