import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createAssertGuard_CommentTagType = _test_assertGuard(
  "CommentTagType",
)<CommentTagType>(CommentTagType)(typia.createAssertGuard<CommentTagType>());
