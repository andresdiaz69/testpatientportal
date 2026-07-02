import { useState } from "react";

export default function Reports() {
    const [rows, setRows] = useState<Report[]>([]);

    const search = () => {
        setRows([
            {
                id: 1,
                date: "2026-07-01",
                link: "https://example.com/report/1"
            },
            {
                id: 2,
                date: "2026-07-02",
                link: "https://example.com/report/2"
            },
            {
                id: 3,
                date: "2026-07-03",
                link: "https://example.com/report/3"
            }
        ]);
    };

    return (
        <div className="container-fluid">

            <div className="card shadow-sm">

                <div className="card-header">
                    <h4 className="mb-0">Reports</h4>
                </div>

                <div className="card-body">

                    <div className="row g-3 align-items-end">

                        <div className="col-md-4">
                            <label className="form-label">
                                From
                            </label>

                            <input
                                type="date"
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label">
                                To
                            </label>

                            <input
                                type="date"
                                className="form-control"
                            />
                        </div>

                        <div className="col-md-4">
                            <button
                                className="btn btn-primary w-100"
                                onClick={search}
                            >
                                Search
                            </button>
                        </div>

                    </div>

                    <hr />

                    <div className="table-responsive">

                        <table className="table table-striped table-hover">

                            <thead className="table-dark">
                                <tr>
                                    <th>Date</th>
                                    <th>Link</th>
                                </tr>
                            </thead>

                            <tbody>

                                {rows.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={2}
                                            className="text-center"
                                        >
                                            No records found.
                                        </td>
                                    </tr>
                                )}

                                {rows.map(row => (
                                    <tr key={row.id}>
                                        <td>{row.date}</td>

                                        <td>
                                            <a
                                                href={row.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Open Report
                                            </a>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

interface Report {
    id: number;
    date: string;
    link: string;
}