---
type: "Ludus Gameplay System"
title: "失敗・即時再挑戦ループ"
description: "失敗理由を明確に返し、少ない手順で次の試行へ戻せるようにする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "runner"
  - "pictor-visual"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:runner:retry-loop"
genre_id: "genre:runner"
implementation_status: "pictor-visual"
implementation_owner: "Pictor"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

失敗理由を明確に返し、少ない手順で次の試行へ戻せるようにする。

# 設計思想

待機画面より、学び直す一回を大切にする。

# 主要機能

- 失敗フィードバック
- ワンタップ再開
- 記録比較

# UXへの寄与

- [再挑戦の軽さ](../../ux/0d7ed44d48b68cdf.md)
- [学習](../../ux/a9eb6ef8ef7d2f55.md)

# ドメイン要素

- [演出とフィードバック](../../domains/presentation-and-feedback.md)

# 汎用実装の判定

- **状態**: pictor-visual
- **所有**: Pictor
- **判断**: ゲーム固有の意味付けを持たない視覚表現としてPictorに集約する候補。

# Pictor候補

- [インパクト・ポストプロセス](../../pictor/impact-and-postprocess.md)

# 実装上の前提

- [速度曲線と難度調整](./speed-curve.md) の後に実装する。
