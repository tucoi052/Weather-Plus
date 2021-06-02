import AsyncStorage from "@react-native-community/async-storage";
import clientStorage from "./ClientStorage";
import dateClient from "./dateClient";
import store from 'store/configureStore';
import { ActionType as ScheduleType } from 'store/schedule';


export let days = new Array();
export let subjects = new Array();
export let scheduleInDay = new Array();

let schedules;
let endDateTimeTables = -1;

export const getSchedulesInAsyncStore = () => {
    (async () => {
        let string = await AsyncStorage.getItem('schedules');
        if (string && string !== '') {
            schedules = JSON.parse((string));

        }
        if (!!schedules) {
            schedules.forEach(e =>
                e.courseSubject.timetables.forEach(i => {
                    if (endDateTimeTables < i.endDate) endDateTimeTables = i.endDate;
                })
            )
            getAll();
            getInDay(new Date);
            store.dispatch({
                type: ScheduleType.SETSCHEDULE,
                allDays: days,
                allSubject: subjects,
                inDaySubject: scheduleInDay,
            })
        }

    })();


}

export const setSchedules = (_schedules: any) => {
    if (_schedules == null) {
        (async () => {
            await AsyncStorage.removeItem('schedules');
            await AsyncStorage.removeItem('tluUser');
            schedules = undefined;
            days = [];
            subjects = [];
            scheduleInDay = [];
            store.dispatch({
                type: ScheduleType.SETSCHEDULE,
                allDays: days,
                allSubject: subjects,
                inDaySubject: scheduleInDay,
            })
        })();
    }
    else {
        schedules = _schedules;
        (async () => {
            await AsyncStorage.setItem('schedules', JSON.stringify(schedules));
        })();
        schedules.forEach(e =>
            e.courseSubject.timetables.forEach(i => {
                if (endDateTimeTables < i.endDate) endDateTimeTables = i.endDate;
            })
        );
        getAll();
        getInDay(new Date);
        store.dispatch({
            type: ScheduleType.SETSCHEDULE,
            allDays: days,
            allSubject: subjects,
            inDaySubject: scheduleInDay,
        })
    }

}


export const getInDay = (inDay: Date) => {
    let inday = inDay;
    let sub = new Array();
    if (!!schedules)
        schedules.forEach(e => {
            e.courseSubject.timetables.forEach(i => {
                if (inday < new Date(i.endDate) && inday > new Date(i.startDate))
                    for (let date = new Date(); date <= new Date(i.endDate); date.setDate(date.getDate() + 1)) {
                        if (date.toISOString().split('T')[0] == inday.toISOString().split('T')[0]) {
                            if (i.weekIndex == (inday.getDay() + 1)) {
                                sub.push({
                                    subjectName: e.subjectName,
                                    class: e.subjectCode.split(' ')[e.subjectCode.split(' ').length - 1].replace(/[()]/g, ''),
                                    weekIndex: i.weekIndex,
                                    startHour: i.startHour,
                                    endHour: i.endHour,
                                    roomName: i.roomName
                                })
                            }
                        }

                    }
            })
        })
    return scheduleInDay = sub.sort((a, b) => { return (a.startHour.start > b.startHour.start) ? 1 : -1 });
}

export const getAll = () => {
    for (let date = new Date(); date <= new Date('2022'); date.setDate(date.getDate() + 1)) {
        let temp = getInDay(date);
        if (temp.length) {
            let inDay = new Date(date);
            subjects.push(temp);
            days.push(`${temp[0].weekIndex == 0 ? ('Chủ nhật') : (`Thứ ${temp[0].weekIndex}`)}, ngày ${dateClient.formatDate(inDay)}`)
        }
    }
}