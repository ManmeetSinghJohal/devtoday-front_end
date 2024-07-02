export const handleFileDelete = (
  value: any,
  setFileIsDeleting: any,
  setValue: any,
  toast: any,
) => {
  setFileIsDeleting(true);
  const fileKey = value.substring(value.lastIndexOf("/") + 1);

  fetch("/api/uploadthing/delete", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "applicaton/json" },
    body: JSON.stringify({ fileKey }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setValue("");
        toast({
          variant: "success",
          description: "File removed",
        });
      } else {
        throw new Error("Deletion failed");
      }
    })
    .catch(() => {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
    })
    .finally(() => {
      setFileIsDeleting(false);
    });
};
