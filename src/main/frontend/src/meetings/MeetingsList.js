// MeetingsList.js
export default function MeetingsList({ meetings, username, onDelete, onSignUp, onUnsubscribe }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {meetings.map((meeting, index) => {
                const isParticipant = meeting.participants?.includes(username);
                return (
                    <tr key={index}>
                        <td>{meeting.title}</td>
                        <td>{meeting.description}</td>
                        <td>
                            <button type="button" onClick={() => onDelete(meeting)}>
                                Usuń
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    isParticipant
                                        ? onUnsubscribe(meeting.id)
                                        : onSignUp(meeting.id)
                                }
                                style={{marginLeft: '10px'}}
                            >
                                {isParticipant ? "Wypisz się" : "Zapisz się"}
                            </button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
