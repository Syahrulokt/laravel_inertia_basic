import React from 'react';
import Layout from '../../Layout/Layout';
import { useForm } from '@inertiajs/react';

export default function CreatePost() {
    // gunakan useForm untuk menangani state dan error secara otomatis
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
    });

    // fungsi submit
    const handleSubmit = (e) => {
        e.preventDefault();
        post('/posts'); // langsung post ke route /posts
    };

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="fw-bold">TAMBAH POST</span>
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
                                        className="btn btn-success me-2"
                                    >
                                        {processing ? 'Saving...' : 'SAVE'}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => reset()}
                                    >
                                        RESET
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
