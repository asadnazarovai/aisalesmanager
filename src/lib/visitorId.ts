const VISITOR_KEY = 'asm_visitor_id';

function generateId(): string {
  return 'v_' + crypto.randomUUID();
}

export function getVisitorId(): string {
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = generateId();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}
