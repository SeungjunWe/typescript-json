import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_createAssertEquals_AtomicUnion = _test_assertEquals(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(typia.createAssertEquals<AtomicUnion>());
