//import React
import React from 'react';

//import layout
import Layout from '../../Layout/Layout';

//import helper dari inertia
import { router, Link } from '@inertiajs/react';

export default function Index({ posts, session }) {

  // fungsi konfirmasi hapus
  const handleDelete = (id) => {
    if (confirm('Yakin ingin menghapus post ini?')) {
      router.delete(`/posts/${id}`);
    }
  };

  return (
    <Layout>
      <div style={{ marginTop: '100px' }}>
        <Link href="/posts/create" className="btn btn-success btn-md mb-3">
          TAMBAH POST
        </Link>

        {session?.success && (
          <div className="alert alert-success border-0 shadow-sm rounded-3">
            <strong>{session.success}</strong>
          </div>
        )}

        <div className="card border-0 rounded shadow-sm">
          <div className="card-body table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">JUDUL</th>
                  <th scope="col">DESKRIPSI</th>
                  <th scope="col" className="text-center">AKSI</th>
                </tr>
              </thead>
              <tbody>
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.content}</td>
                      <td className="text-center">
                        {/* Tombol EDIT warna oranye (Bootstrap warning) */}
                        <Link
                          href={`/posts/${post.id}/edit`}
                          className="btn btn-sm btn-warning me-2 text-white"
                        >
                          EDIT
                        </Link>

                        {/* Tombol DELETE */}
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="btn btn-sm btn-danger"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">
                      Tidak ada data.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
