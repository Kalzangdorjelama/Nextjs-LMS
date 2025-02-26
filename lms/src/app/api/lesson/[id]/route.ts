import { deleteLesson, fetchLesson } from "../lesson.controller";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  return fetchLesson(id);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  return deleteLesson(id);
}
