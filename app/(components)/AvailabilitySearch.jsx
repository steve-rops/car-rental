"use client";

import DatePicker from "./DatePicker";
import { useEffect, useState } from "react";
import { useDatesANDLocation } from "../(context)/dateANDLocationContext";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { format, isPast } from "date-fns";
import { useRouter } from "next/navigation";
import SubmitButton from "./SubmitButton";

const AvailabilitySearch = () => {
  const router = useRouter();
  const [location, setLocation] = useState("title");
  const [startDate, setStartDate] = useState(
    new Date(new Date(new Date().getTime() + 86400000).setHours(0, 0, 0, 0))
  );
  const [endDate, setEndDate] = useState(
    new Date(new Date(new Date().getTime() + 86400000 * 2).setHours(0, 0, 0, 0))
  );

  const { dispatch } = useDatesANDLocation();
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    router.push(
      `/checkAvailability?start=${format(
        startDate,
        "dd MMM  yyyy"
      )}&end=${format(endDate, "dd MMM yyy")}&location=${location}`
    );

    dispatch({
      type: "updateState",
      payload: { start: startDate, end: endDate, location: location },
    });
  };

  useEffect(() => {
    unregister("location");
    unregister("startDate");
    unregister("endDate");
  }, [unregister, startDate, endDate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid md:grid-cols-[25%,1fr,1fr,1fr] mx-auto w-[90%] items-center border rounded-lg md:divide-x p-2">
        <div className="flex flex-col">
          {/* location selection */}
          <div className="p-2 flex flex-col items-start">
            <p className="lg:text-lg text-md">Location</p>

            <select
              {...register("location", {
                validate: (value) =>
                  value !== "title" || "select a valid location",
              })}
              className="outline-none border-0 rounded-md text-md text-gray-600"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option className="" disabled value="title">
                choose location...
              </option>
              <option value="airport">From Airport</option>
              <option value="store">From store</option>
            </select>
          </div>

          {errors.location && (
            <p className="text-xs text-red-500">{errors.location.message}</p>
          )}
        </div>

        {/* starting date picker */}
        <div className="p-2 flex flex-col">
          <div
            {...register("startDate", {
              value: startDate,
              validate: (value) =>
                !isPast(value) || "**select a valid starting date**",
            })}
          >
            <DatePicker date={startDate} setDate={setStartDate}>
              Select your <span className="underline">pick up</span> date:
            </DatePicker>
          </div>

          {errors.startDate && (
            <p className="text-xs text-red-500">{errors.startDate.message}</p>
          )}
        </div>

        {/* end date picker */}
        <div
          {...register("endDate", {
            value: endDate,
            validate: (value) =>
              startDate < value || "**select a valid starting date**",
          })}
          className="p-2 flex flex-col"
        >
          <DatePicker date={endDate} setDate={setEndDate}>
            Select your <span className="underline">drop off</span> date:
          </DatePicker>

          {errors.endDate && (
            <p className="text-xs text-red-500">{errors.endDate.message}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <div className="w-full flex justify-center">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default AvailabilitySearch;
