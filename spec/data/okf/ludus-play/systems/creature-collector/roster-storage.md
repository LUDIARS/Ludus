---
type: "Ludus Gameplay System"
title: "名簿と保管"
description: "多数の個体を種、能力、役割、履歴で整理する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "creature-collector"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:creature-collector:roster-storage"
genre_id: "genre:creature-collector"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

多数の個体を種、能力、役割、履歴で整理する。

# 設計思想

収集量が増えても比較操作を破綻させない。

# 主要機能

- 個体識別
- 検索と絞り込み
- 保管上限

# UXへの寄与

- [愛着](../../ux/1b83fac88275658c.md)
- [見通し](../../ux/7fb4b30947b02823.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [メタゲームと運用](../../domains/meta-and-live-operations.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [遭遇と獲得](./encounter-capture.md) の後に実装する。
