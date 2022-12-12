import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CalendarDay } from "../../components/calendarDay";
import { Dialog } from "../../components/dialog";
import { CHANGE_SELECTED_DATE } from "../../store/actions/calendarActions";
import { BiSearch } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import styles from "./style.module.css";

export const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const { selectedDate, editingDate, notes, isNote } = useSelector(
    (state) => state.calendar
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setMonthDays(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    searchNotes();
  }, [search]);

  const setMonthDays = (dateOfMonth) => {
    const calendar = [];
    const startDay = dateOfMonth.clone().startOf("month").startOf("week");
    const endDay = dateOfMonth.clone().endOf("month").endOf("week");

    while (startDay.isBefore(endDay, "day"))
      calendar.push(
        Array(7)
          .fill(0)
          .map(() => startDay.add(1, "day").clone())
      );

    setCalendar(calendar);
  };

  const changeSelectedDate = (direction) => {
    dispatch(CHANGE_SELECTED_DATE(direction));
  };

  const currentDate = (direction) => {
    dispatch(CHANGE_SELECTED_DATE(direction));
  };

  const searchNotes = () => {
    if (!search) {
      setFilteredNotes([]);
      return;
    }
    const result = Object.entries(notes)
      .map(([date, text]) => ({ date, text }))
      .filter((note) =>
        note.text.toLowerCase().includes(search.toLocaleLowerCase())
      );

    setFilteredNotes(result);
  };

  return (
    <div>
      <Dialog visible={!!editingDate} />
      <h1>Calendar</h1>
      <div className={styles.container__calendar}>
        <div className={styles.calendar__header}>
          <div className={styles.search}>
            <BiSearch />
            <input
              className={styles.input}
              placeholder="search..."
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.calendar__navigation}>
          <button
            className={styles.calendar__button}
            onClick={() => changeSelectedDate("prev")}
          >
            <FiArrowLeft />
          </button>
          <h2>{selectedDate.format("MMM YYYY")}</h2>
          <button
            className={styles.calendar__button}
            onClick={() => changeSelectedDate("next")}
          >
            <FiArrowRight />
          </button>
          <button
            className={styles.calendar__reset}
            onClick={() => currentDate("current")}
          >
            Today
          </button>
        </div>
        <div className={styles.filtered__notes}>
          {filteredNotes.length
            ? filteredNotes.map((note) => (
                <div key={note.date}>
                  {note.date}:{note.text}
                </div>
              ))
            : ""}
        </div>
        <div className={styles.calendar}>
          {calendar.map((row, index) => {
            return (
              <div className={styles.week} key={index}>
                {(row || []).map((day) => {
                  return (
                    <CalendarDay
                      isNote={isNote}
                      day={day}
                      index={index}
                      note={notes[day.format("YYYY-MM-DD")]}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
