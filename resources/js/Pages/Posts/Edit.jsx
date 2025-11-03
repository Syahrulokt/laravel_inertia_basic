//import React
import React from 'react';

//import layout
import Layout from '../../Layout/Layout';

//import inertia helper
import { useForm } from '@inertiajs/react';

export default function Edit({ post }) {
    // inisialisasi form dengan data existing dari backend
    const { data, setData, put, processing, errors } = useForm({
        title: post.title || '',
        content: post.content || '',
    });

    // fungsi update
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/posts/${post.id}`); // kirim PUT ke Laravel
    };

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-primary">
                        <div className="card-header">
                            <span className="fw-bold">EDIT POST</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* TITLE */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">JUDUL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="Masukkan Judul Post"
                                    />
                                    {errors.title && (
                                        <div className="text-danger mt-1">{errors.title}</div>
                                    )}
                                </div>

                                {/* CONTENT */}
                                <div className="mb-3">
                                    <label className="form-label fw-bold">DESKRIPSI</label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        value={data.content}
                                        onChange={(e) => setData('content', e.target.value)}
                                        placeholder="Masukkan Konten Post"
                                    />
                                    {errors.content && (
                                        <div className="text-danger mt-1">{errors.content}</div>
                                    )}
                                </div>

                                {/* BUTTONS */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="btn btn-primary me-2"
                                    >
                                        {processing ? 'Updating...' : 'UPDATE'}
                                    </button>
                                    <a href="/posts" className="btn btn-secondary">
                                        CANCEL
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
