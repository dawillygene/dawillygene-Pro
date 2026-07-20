'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { getCollection, deleteDocument, COLLECTIONS } from '@/lib/firestore';

interface Inquiry {
  id: string;
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  createdAt?: { seconds: number } | null;
}

const INQ_CSS = `
  .inq-empty { padding:3rem; text-align:center; color:rgba(255,255,255,.35); border:1px dashed rgba(255,255,255,.08); border-radius:16px; }
  .inq-card { padding:1.25rem 1.5rem; border-radius:14px; background:rgba(255,255,255,.02); border:1px solid rgba(255,255,255,.06); margin-bottom:1rem; }
  .inq-head { display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:.5rem; }
  .inq-name { font-size:1rem; font-weight:700; color:#e2e8f0; }
  .inq-email { font-size:.8rem; color:#38bdf8; text-decoration:none; }
  .inq-date { font-size:.72rem; color:rgba(255,255,255,.3); white-space:nowrap; }
  .inq-subject { font-size:.85rem; font-weight:600; color:rgba(255,255,255,.65); margin:.4rem 0 .3rem; }
  .inq-msg { font-size:.85rem; color:rgba(255,255,255,.5); line-height:1.6; white-space:pre-wrap; }
  .inq-del { margin-top:.75rem; font-size:.75rem; color:rgba(244,63,94,.8); background:none; border:none; cursor:pointer; padding:0; }
  .inq-del:hover { color:#f43f5e; text-decoration:underline; }
`;

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    getCollection<Inquiry>(COLLECTIONS.CONTACT_INQUIRIES)
      .then((data) => {
        data.sort((a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0));
        setInquiries(data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this inquiry?')) return;
    await deleteDocument(COLLECTIONS.CONTACT_INQUIRIES, id);
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  const fmtDate = (ts?: { seconds: number } | null) =>
    ts ? new Date(ts.seconds * 1000).toLocaleString() : '';

  return (
    <AdminLayout pageTitle="Contact Inquiries">
      <style>{INQ_CSS}</style>
      {loading ? (
        <div className="inq-empty">Loading inquiries…</div>
      ) : inquiries.length === 0 ? (
        <div className="inq-empty">No inquiries yet. Messages sent from the contact form will appear here.</div>
      ) : (
        inquiries.map((inq) => (
          <div key={inq.id} className="inq-card">
            <div className="inq-head">
              <div>
                <div className="inq-name">{inq.name || 'Anonymous'}</div>
                {inq.email && <a className="inq-email" href={`mailto:${inq.email}`}>{inq.email}</a>}
              </div>
              <div className="inq-date">{fmtDate(inq.createdAt)}</div>
            </div>
            {inq.subject && <div className="inq-subject">{inq.subject}</div>}
            <div className="inq-msg">{inq.message}</div>
            <button className="inq-del" onClick={() => handleDelete(inq.id)}>Delete</button>
          </div>
        ))
      )}
    </AdminLayout>
  );
}
