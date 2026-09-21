import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Send } from "lucide-react";

interface AccessRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemTitle: string;
  requestLabel: string;
}

export function AccessRequestModal({ open, onOpenChange, itemTitle, requestLabel }: AccessRequestModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  const isAllConferences = itemTitle === "All Conferences";
  const isAllProjects = itemTitle === "All Projects";
  const isAll = isAllConferences || isAllProjects;

  const subject = isAllConferences
    ? "Please share access to all conference resources"
    : isAllProjects
    ? "Please share access to all project resources"
    : `Please share access to: ${itemTitle} (${requestLabel})`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reasonLine = reason ? `%0D%0AReason for request: ${encodeURIComponent(reason)}` : "";
    const body = isAllConferences
      ? `Hi Emma,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)} and I would love access to the resources from all of your conference presentations.%0D%0A%0D%0AYou can reach me at: ${encodeURIComponent(email)}${reasonLine}%0D%0A%0D%0AThanks!`
      : isAllProjects
      ? `Hi Emma,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)} and I would love access to the resources from all of your projects.%0D%0A%0D%0AYou can reach me at: ${encodeURIComponent(email)}${reasonLine}%0D%0A%0D%0AThanks!`
      : `Hi Emma,%0D%0A%0D%0AMy name is ${encodeURIComponent(name)} and I am requesting access to the ${encodeURIComponent(requestLabel)} for "${itemTitle}".%0D%0A%0D%0AYou can reach me at: ${encodeURIComponent(email)}${reasonLine}%0D%0A%0D%0AThanks!`;
    window.open(`mailto:emmapindera@hotmail.com?subject=${encodeURIComponent(subject)}&body=${body}`);
    setEmail("");
    setName("");
    setReason("");
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-background rounded-xl shadow-xl p-6 focus:outline-none">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Dialog.Title className="text-lg font-semibold">
                {requestLabel.charAt(0).toUpperCase() + requestLabel.slice(1)}
              </Dialog.Title>
              <Dialog.Description className="text-sm text-muted-foreground mt-1">
                Enter your details and your email will open with a pre-filled request to send to Emma.
              </Dialog.Description>
            </div>
            <Dialog.Close className="rounded-md p-1 hover:bg-muted transition-colors">
              <X className="w-4 h-4" />
            </Dialog.Close>
          </div>

          <div className="mb-4 p-3 rounded-md text-sm" style={{ backgroundColor: "#e8f9f5", color: "#2d9d7f" }}>
            <span className="font-medium">Requesting:</span>
            <p className="mt-1 text-muted-foreground text-xs leading-snug">
              {isAll ? itemTitle : `${requestLabel.replace(/\b\w/g, c => c.toUpperCase())}: ${itemTitle}`}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="req-name" className="block text-sm font-medium mb-1">Your name</label>
              <input
                id="req-name"
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#7ed9c3" } as React.CSSProperties}
              />
            </div>
            <div>
              <label htmlFor="req-email" className="block text-sm font-medium mb-1">Your email</label>
              <input
                id="req-email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#7ed9c3" } as React.CSSProperties}
              />
            </div>
            <div>
              <label htmlFor="req-reason" className="block text-sm font-medium mb-1">Reason for request <span className="text-muted-foreground font-normal">(optional)</span></label>
              <textarea
                id="req-reason"
                value={reason}
                onChange={e => setReason(e.target.value)}
                placeholder="For example, I attended the session and would love to revisit the material..."
                rows={3}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 resize-none"
                style={{ "--tw-ring-color": "#7ed9c3" } as React.CSSProperties}
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#2d9d7f" }}
            >
              <Send className="w-4 h-4" />
              Send request
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
