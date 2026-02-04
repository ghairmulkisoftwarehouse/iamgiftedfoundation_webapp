'use client'
import { useState } from 'react';
import HeroSectionBanner from '@/components/global/HeroSectionBanner';
import EventList from '@/components/events/eventList/EventList';
import { useDispatch, useSelector } from 'react-redux';
import { setStats as setEventStats } from '@/redux/reducers/eventSlice';
import { setStats as setCategoryStats } from '@/redux/reducers/categorySlice';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import devLog from '@/utils/logsHelper';

const Event = () => {
  const dispatch = useDispatch();

  const { docs } = useSelector(state => state.event);
    const { docs:docsCategory } = useSelector(state => state.category);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  devLog(' this is a docs:', docsCategory);

  const eventsQueryKey = ['event',currentPage, limit];
  const categoriesQueryKey = ['category',];

  // Fetch events
  const { isLoading: eventsLoading, isFetching: eventsFetching, isError: eventsError, error: eventsErrorObj } = useQuery(
    eventsQueryKey,
    () => Axios.get(`/event?pageSize=${limit}&page=${currentPage}`),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        const { data: { data: { docs, pages, docsCount, page } } } = data;
        dispatch(setEventStats({ docs, pages, docsCount, page }));
      },
    }
  );

  // Fetch categories
  const { isLoading: categoriesLoading,  isError: categoriesError, error: categoriesErrorObj } = useQuery(
    categoriesQueryKey,
    () => Axios.get(`/category`),
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        const { data: { data: { docs, pages, docsCount, page } } } = data;
        dispatch(setCategoryStats({ docs, pages, docsCount, page }));
      },
    }
  );

  return (
    <div className="flex flex-col w-full">
      <HeroSectionBanner
        title="Events"
        bannerSvgClass='w-[120px] lg:w-[130px] xl:w-[160px]'
        subtitle="The IAMGIFTED Foundation offers events that promote mental wellness and personal growth, including wellness weekends, therapy sessions, workshops, and community gatherings for underserved communities."
        height="h-[250px]"
        subtitleClass="text-sm sm:text-base md:text-[17px] text-white/70"
      />

      <EventList
        isFetching={eventsFetching}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        isLoading={eventsLoading && currentPage === 1}
        isError={eventsError}
        error={eventsErrorObj}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
        categoriesErrorObj={categoriesErrorObj}
      />
    </div>
  );
};

export default Event;
